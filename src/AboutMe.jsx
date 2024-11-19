import Card from './Card';
import Navbar from './Navbar';
import SkillCard from './SkillCard';
import './AboutMe.css';

const AboutMe = () => {
    const topStyle = {
        minHeight: "25rem"
    }
    const bottomStyle = {
        minHeight: "28rem"
    }
    return (
        <>
            <div className='card-container'>
                <div className='double-card'>
                    <div className='inner-card'>
                        <h2>Education</h2>
                        <Card
                        className="side-by-side"
                        content1={"I study Applied Mathematics and Computer Engineering at Queen's University. This unique program combines the traditional computer engineering courses (DS&A, OOP, Software Development, Computer Architecture, etc.), complementing a traditional set of mathematics courses (real/complex analysis, probability, stochastic processes, etc.). This combination has provided me with a rigorous mathematical background and a passion for its applications in machine learning and software engineering."}
                        style={topStyle}
                        >
                        </Card>
                    </div>
                    <div className='inner-card'>
                        <h2>Work Experience</h2>
                        <Card
                        className="side-by-side"
                        content1={"I am currently working as a Software Developer Intern at RBC Capital Markets - Quantitative & Technology Services. In this role I have had the opportunity to build, enhance and fix a variety of console and web applications that provide critical pricing services to the Global Equity Derivatives team. I am working with C# (.NET), Javascript (Angular, Node.js, Express.js, Sequelize) and SQL."}
                        style={topStyle}
                        >
                        </Card>
                    </div>
                </div>
                
                <SkillCard></SkillCard>
                
                <div className='double-card'>
                    <div className='inner-card'>
                        <h2>Extra-Curricular Involvement</h2>
                        <Card
                        className="side-by-side"
                        // title={"Extra-Curricular Involvement"}
                        content1={"In my time at Queen's I have been a member of the Queen's Machine Learning Club (QMIND). With QMIND I have participated in machine learning research and development projects. Last year, I worked on a crypto-currency arbitrage pathfinding project, and I am currently researching applications of mechanistic interpretability. I have also been a long-standing member of the Commerce and Engineering Environmental Conference (CEEC). CEEC is Canada's largest undergraduate sustainability conference. Most recently, I was the sponsorship director, leading a team of 4 coordinators."}
                        style={bottomStyle}
                        >
                        </Card>
                    </div>
                    
                    <div className='inner-card'>
                        <h2>Hobbies</h2>
                        <Card
                        className="side-by-side"
                        // title={"Extra-Curricular Involvement"}
                        content1={"I am an outdoors enthusiast. I love hiking, biking, kayaking and canoeing through nature. My greatest passion is canoe tripping. I have been participating in, and later guiding, wilderness canoe trips for over 10 years. The greatest of which was a 52-day journey through Canada’s Arctic. Canoe tripping has instilled initiative, collaborative skills and a sense of adventure that has benefitted all aspects of my life."}
                        style={bottomStyle}
                        >
                        </Card>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AboutMe;