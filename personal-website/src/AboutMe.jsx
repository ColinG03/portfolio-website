import React, { useState } from 'react';
import Card from './Card';
import Navbar from './Navbar';
import SkillCard from './SkillCard';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <div className='section-header'>
                <p className='message'>About Me</p>
            </div> */}
            <div className='card-container'>
                <h2 className='title'>Education</h2>
                <Card 
                className="card" 
                // title={"Education & Involvement"} 
                content1={"I study Applied Mathematics and Computer Engineering at Queen's University. This unique program combines the traditional computer engineering courses (DS&A, OOP, Software Development, Computer Architecture, etc.), complementing a traditional set of mathematics courses (real/complex analysis, probability, stochastic processes, etc.). This combination has provided me with a rigorous mathematical background and a passion for its applications in machine learning and software engineering."}
                >
                </Card>
                
                <SkillCard></SkillCard>
                
                <div className='double-card'>
                    <div>
                        <h2>Extra-Curricular Involvement</h2>
                        <Card
                        className="side-by-side"
                        // title={"Extra-Curricular Involvement"}
                        content1={"In my time at Queen's I have been a member of the Queen's Machine Learning Club (QMIND). With QMIND I have participated in machine learning research and development projects. Last year, I worked on a crypto-currency arbitrage pathfinding project, and I am currently researching applications of mechanistic interpretability. I have also been a long-standing member of the Commerce and Engineering Environmental Conference (CEEC). CEEC is Canada's largest undergraduate sustainability conference. Most recently, I was the sponsorship director, leading a team of 4 coordinators."}
                        >
                        </Card>
                    </div>
                    
                    <div>
                        <h2>Hobbies</h2>
                        <Card
                        className="side-by-side"
                        // title={"Extra-Curricular Involvement"}
                        content1={"I am an outdoors enthusiast. I love hiking, biking, kayaking and canoeing through nature. My greatest passion is canoe tripping. I have been participating in, and later guiding, wilderness canoe trips for over 10 years. The greatest of which was a 52-day journey through Canada’s Arctic. Canoe tripping has instilled initiative, collaborative skills and a sense of adventure that has benefitted all aspects of my life."}
                        >
                        </Card>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AboutMe;