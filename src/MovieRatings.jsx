import { useState, useEffect } from 'react';
import './MovieRatings.css';

const MovieRatings = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const rssUrl = 'https://letterboxd.com/coling15g/rss/';
            
            // Try multiple CORS proxies in sequence
            const proxyOptions = [
                'https://api.allorigins.win/raw?url=',
                'https://corsproxy.io/?',
                'https://api.codetabs.com/v1/proxy?quest='
            ];

            let lastError = null;
            let xmlText = null;

            // Try each proxy until one succeeds
            for (const proxyUrl of proxyOptions) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000);
                
                try {
                    const fullUrl = proxyUrl + encodeURIComponent(rssUrl);
                    const response = await fetch(fullUrl, {
                        signal: controller.signal
                    });
                    
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        console.warn(`Proxy ${proxyUrl} returned status ${response.status}`);
                        lastError = new Error(`HTTP error! status: ${response.status}`);
                        continue; // Try next proxy
                    }

                    xmlText = await response.text();
                    break; // Success, exit loop
                } catch (err) {
                    clearTimeout(timeoutId);
                    if (err.name === 'AbortError') {
                        console.warn(`Proxy ${proxyUrl} timed out after 3 seconds`);
                        lastError = new Error('Request timeout');
                    } else {
                        console.warn(`Proxy ${proxyUrl} failed:`, err.message);
                        lastError = err;
                    }
                    continue; // Try next proxy
                }
            }

            // If all proxies failed, use fallback
            if (!xmlText) {
                console.error('All proxies failed, using fallback data');
                const fallbackMovies = [
                    {
                        name: "Memento",
                        year: "2000",
                        rating: "★★★★½",
                        posterUrl: "https://a.ltrbxd.com/resized/sm/upload/v1/3q/s4/aa/memento-0-600-0-900-crop.jpg?v=80f0732247"
                    },
                    {
                        name: "Full Metal Jacket",
                        year: "1987",
                        rating: "★★★★½",
                        posterUrl: "https://a.ltrbxd.com/resized/sm/upload/l0/l4/6c/7v/29veIwD38rVL2qY74emXQw4y25H-0-600-0-900-crop.jpg?v=6e44829670"
                    },
                    {
                        name: "Carts of Darkness",
                        year: "2008",
                        rating: "★★★★",
                        posterUrl: "https://a.ltrbxd.com/resized/film-poster/1/5/6/7/6/15676-carts-of-darkness-0-600-0-900-crop.jpg?v=37de9b1d51"
                    }
                ];
                setMovies(fallbackMovies);
                setLoading(false);
                return;
            }

            // Parse the RSS feed
            try {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                // Resolve namespaces once; fallback to common URIs if not declared (defensive)
                const lbxNS = xmlDoc.lookupNamespaceURI('letterboxd') || 'https://letterboxd.com';
                const tmdbNS = xmlDoc.lookupNamespaceURI('tmdb') || 'https://www.themoviedb.org';
                const items = xmlDoc.querySelectorAll('item');

                const toStars = (num) => {
                    if (!num && num !== 0) return '';
                    const full = Math.floor(num);
                    const half = num % 1 >= 0.5;
                    return '★'.repeat(full) + (half ? '½' : '');
                };

                const movieData = Array.from(items).slice(0, 3).map((item) => {
                    const title = item.getElementsByTagName('title')[0]?.textContent || '';
                    const link = item.getElementsByTagName('link')[0]?.textContent || '';
                    const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || '';

                    // ✅ Namespaced tags
                    const movieName = item.getElementsByTagNameNS(lbxNS, 'filmTitle')[0]?.textContent || '';
                    const year = item.getElementsByTagNameNS(lbxNS, 'filmYear')[0]?.textContent || '';
                    const watchedDate = item.getElementsByTagNameNS(lbxNS, 'watchedDate')[0]?.textContent || '';
                    const rewatch = item.getElementsByTagNameNS(lbxNS, 'rewatch')[0]?.textContent === 'Yes';
                    const memberRatingStr = item.getElementsByTagNameNS(lbxNS, 'memberRating')[0]?.textContent || '';
                    const tmdbId = item.getElementsByTagNameNS(tmdbNS, 'movieId')[0]?.textContent || '';

                    // Description is HTML inside CDATA → parse it to grab the poster + review
                    const descriptionHTML = item.getElementsByTagName('description')[0]?.textContent || '';
                    const htmlDoc = new DOMParser().parseFromString(descriptionHTML, 'text/html');
                    const posterUrl = htmlDoc.querySelector('img')?.getAttribute('src') || '';
                    // Grab the first non-image <p> as the review
                    const review = Array.from(htmlDoc.querySelectorAll('p'))
                    .map(p => p.textContent?.trim() || '')
                    .filter(t => t.length > 0)[0] || '';

                    const rating = toStars(parseFloat(memberRatingStr));

                    return {
                        name: movieName || title, // fallback
                        year,
                        rating,
                        review,
                        posterUrl,
                        date: watchedDate || pubDate,
                        link,
                        rewatch,
                        tmdbId
                    };
                });

                setMovies(movieData);
                setLoading(false);
            } catch (err) {
                console.error('Error parsing RSS feed:', err);
                // Fallback to sample data if parsing fails
                const fallbackMovies = [
                    {
                        name: "Memento",
                        year: "2000",
                        rating: "★★★★½",
                        posterUrl: "https://a.ltrbxd.com/resized/sm/upload/v1/3q/s4/aa/memento-0-600-0-900-crop.jpg?v=80f0732247"
                    },
                    {
                        name: "Full Metal Jacket",
                        year: "1987",
                        rating: "★★★★½",
                        posterUrl: "https://a.ltrbxd.com/resized/sm/upload/l0/l4/6c/7v/29veIwD38rVL2qY74emXQw4y25H-0-600-0-900-crop.jpg?v=6e44829670"
                    },
                    {
                        name: "Carts of Darkness",
                        year: "2008",
                        rating: "★★★★",
                        posterUrl: "https://a.ltrbxd.com/resized/film-poster/1/5/6/7/6/15676-carts-of-darkness-0-600-0-900-crop.jpg?v=37de9b1d51"
                    }
                ];
                setMovies(fallbackMovies);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return (
            <div className="movies-section">
                <h2>What I've been watching</h2>
                <div className="movies-loading">
                    <p>Loading recent movies...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="movies-section">
                <h2>What I've been watching</h2>
                <div className="movies-error">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="movies-section">
            <h2>What I've been watching</h2>
            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <div className="movie-poster">
                            <img 
                                src={movie.posterUrl} 
                                alt={`${movie.name} poster`}
                                onError={(e) => {
                                    console.log('Image failed to load:', movie.posterUrl);
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                                onLoad={() => {
                                    console.log('Image loaded successfully:', movie.posterUrl);
                                }}
                            />
                            <div className="poster-placeholder" style={{ display: 'none' }}>
                                <span>🎬</span>
                            </div>
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.name}</h3>
                            <div className="movie-info-container">
                                <p className="movie-year">{movie.year}</p>
                                <div className="movie-rating">
                                    <span className="stars">{movie.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieRatings;
