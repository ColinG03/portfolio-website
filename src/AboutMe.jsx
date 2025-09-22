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
                            Hey there! I'm currently pursuing my <b>Applied Mathematics & Computer Engineering</b> degree at <b>Queen's University</b>. 
                            Previously, I spent a year working as a <b>Software Developer Intern at RBC Capital Markets</b>, 
                            where I built pricing and risk applications with the equity derivatives team.
                        </p>
                        <br />
                        <p>
                            Right now, I'm building <b>Compile</b>, an AI news and media aggregator, and serving as Director of Design for <b>QMIND</b>, the Queen's Machine Learning Club.
                            I love the outdoors – camping, hiking, paddling, and skiing. I also spend my summers working as a canoe tripping guide. I'm also into music, reading, and watching movies – check out
                            my recent Letterboxd reviews below!
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
                                    <p>I love working on projects, attending hackathons and keeping up with the latest developments in AI (I'm building Compile to help with that last one ;)</p>
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