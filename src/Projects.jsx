import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";


const Projects = () => {
    return (
        <>
            <Navbar></ Navbar>
            <div className="proj-section-container">
                <div className='section-header'>
                    <p className='message header-message'>My Projects</p>
                    <p className='message sub-message'>Click to learn more!</p>
                </div>
                <Carousel></Carousel>
            </div>
        </>
    );
}

export default Projects;