import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, imageUrl, tooltipText }) {
  return (
    <>
        <div className="project-card">
            <div className="project-card-content">
                <h3 className="card-title">{title}</h3>
                {imageUrl && <img src={imageUrl} alt={title} className="card-image project-image" />}
            </div>
            <span className='tooltip project-tooltip'>{tooltipText}</span>
        </div>
    </>
  );
}

export default ProjectCard;