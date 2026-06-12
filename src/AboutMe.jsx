import Navbar from './Navbar';
import MovieRatings from './MovieRatings';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='about-container'>
                <div className='about-header'>
                    <h1>About Me</h1>
                </div>
                
                <div className='about-content'>
                    <div className='intro-blurb'>
                        <p>
                            Hey there! I'm a Software Engineer at{' '}
                            <a href="https://exa.ai" target="_blank" rel="noopener noreferrer">Exa</a>, building AI search systems. I graduated from Queen's University with a degree in Applied Mathematics & Computer Engineering.
                        </p>
                        <br />
                        <p>
                            I love the outdoors, camping, hiking, paddling, and skiing. I also worked as a canoe guide for many summers!
                            I'm also into music, reading, and watching movies – check out my recent Letterboxd reviews below!
                        </p>
                    </div>

                    <div className='about-section'>
                        <MovieRatings />
                    </div>

                    <div className='about-section'>
                        <h2>Hobbies & Interests</h2>
                        <div className='hobbies-grid'>
                            <div className='hobby-card'>
                                <div className='hobby-image'>
                                    <img src="VII_E-129.JPG" alt="Wilderness Canoe Tripping" />
                                </div>
                                <div className='hobby-content'>
                                    <h4>Wilderness Canoe Tripping</h4>
                                    <p>Guiding and participating in expeditions through Canada's wilderness, including a 52-day Arctic journey.</p>
                                </div>
                            </div>
                            
                            <div className='hobby-card'>
                                <div className='hobby-image'>
                                    <img src="hackAi2025-43.jpeg" alt="Coding, AI and Hackathons" />
                                </div>
                                <div className='hobby-content'>
                                    <h4>Coding, AI and Hackathons</h4>
                                    <p>I love working on projects, attending hackathons and keeping up with the latest developments in AI</p>
                                </div>
                            </div>
                            
                            <div className='hobby-card'>
                                <div className='hobby-image'>
                                    <img src="IMG_0699.JPG" alt="Whitewater Paddling" />
                                </div>
                                <div className='hobby-content'>
                                    <h4>Whitewater Paddling & Safety</h4>
                                    <p>Whitewater enthusiast – canoeing and kayaking. Certified Wilderness First Responder and Whitewater Rescue Technician.</p>
                                </div>
                            </div>

                            <div className='hobby-card'>
                                <div className='hobby-image'>
                                    <img src="IMG_2172.JPG" alt="Skiing" />
                                </div>
                                <div className='hobby-content'>
                                    <h4>Skiing</h4>
                                    <p>Downhill ski raced for 10+ years, representing Ontario at Eastern Can-Ams and Whistler Cup. Currently a passionate backcountry and all-mountain skier!</p>
                                </div>
                            </div>

                            <div className='hobby-card'>
                                <div className='hobby-image'>
                                    <img src="VII_EEE-131.JPG" alt="Guitar & Music" />
                                </div>
                                <div className='hobby-content'>
                                    <h4>Guitar & Music</h4>
                                    <p>Playing acoustic guitar for 5+ years, with a passion for folk, indie, and rock music.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;