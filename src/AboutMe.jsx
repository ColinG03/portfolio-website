import Card from './Card';
import Navbar from './Navbar';
import SkillCard from './SkillCard';
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
                    <div className='about-section'>
                        <h2>Education</h2>
                        <div className='paper-card'>
                            <div className='degree-info'>
                                <h3>Applied Mathematics & Computer Engineering</h3>
                                <p className='institution'>Queen's University</p>
                            </div>
                            <div className='details'>
                                <div className='detail-group'>
                                    <h4>Computer Engineering Focus</h4>
                                    <ul>
                                        <li>Data Structures & Algorithms</li>
                                        <li>Object-Oriented Programming</li>
                                        <li>Software Development</li>
                                        <li>Computer Architecture</li>
                                    </ul>
                                </div>
                                <div className='detail-group'>
                                    <h4>Mathematics Foundation</h4>
                                    <ul>
                                        <li>Real & Complex Analysis</li>
                                        <li>Probability Theory</li>
                                        <li>Stochastic Processes</li>
                                        <li>Machine Learning Applications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='about-section'>
                        <h2>Work Experience</h2>
                        <div className='paper-card'>
                            <div className='job-info'>
                                <h3>Software Developer Intern</h3>
                                <p className='company'>RBC Capital Markets - Quantitative & Technology Services</p>
                            </div>
                            <div className='details'>
                                <div className='detail-group'>
                                    <h4>Key Responsibilities</h4>
                                    <ul>
                                        <li>Developed, maintained, and deployed pricing and risk applications for equity derivatives</li>
                                        <li>Built observability and monitoring tools for key processes</li>
                                        <li>Developed robust CI/CD pipelines for seamless deployment</li>
                                    </ul>
                                </div>
                                <div className='detail-group'>
                                    <h4>Technologies Used</h4>
                                    <ul>
                                        <li>C# (.NET)</li>
                                        <li>C++</li>
                                        <li>JavaScript (Angular, Node.js, Express.js, Sequelize ORM)</li>
                                        <li>SQL Server</li>
                                        <li>Jenkins</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <SkillCard></SkillCard> */}

                    <div className='about-section'>
                        <h2>Extra-Curricular Involvement</h2>
                        <div className='paper-card'>
                            <div className='details'>
                                <div className='detail-group'>
                                    <h4>Queen's Machine Learning Club (QMIND)</h4>
                                    <ul>
                                        <li>Director of Design - responsible for hiring and overseeing PMs and design team members.</li>
                                        <li>Previous projects include <em>Mechanistic Interpretability for LLM Jailbreak Defense</em> and <em>RL for Cryptocurrency Arbitrage Pathfinding</em></li>
                                    </ul>
                                </div>
                                <div className='detail-group'>
                                    <h4>Commerce and Engineering Environmental Conference (CEEC)</h4>
                                    <ul>
                                        <li>Sponsorship Director - led team of 4 coordinators to secure $40,000 in sponsorships, allowing for a 50% decrease in attendance fees compared to previous years</li>
                                        <li>Helping organize and run Canada's largest undergraduate sustainability conference</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                    <p>I love working on projects, attending hackathons and keeping up with the latest developments in AI (I built Compile to help with that last one ;)</p>
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
                                    <p>Downhill ski raced for 10+ years, representing Ontario at Eastern Can-Ams and Whistler Cup. Currently a passionate backcountry and all-mountain skiier!</p>
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