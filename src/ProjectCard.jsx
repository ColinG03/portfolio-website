import { ExternalLink } from "lucide-react";
import "./Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className={`project-image ${project.imageFit}`}
        />
        <div className="project-image-overlay" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-description">{project.description}</p>

        <div className="project-skills">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Check it out!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 