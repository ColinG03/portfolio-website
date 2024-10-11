import React from 'react';
import './Card.css';

function ProjectCard({ title, imageUrl, tooltipText }) {
  return (
    <>
        <div className="project-card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                {imageUrl && <img src={imageUrl} alt={title} className="card-image project-image" />}
                {/* <div className='text-container'>
                    <p className="card-text">{content1}</p>
                    <p className="card-text">{content2}</p>
                </div> */}
            </div>
            <span className='tooltip project-tooltip'>{tooltipText}</span>
        </div>
    </>
  );
}

export default ProjectCard;