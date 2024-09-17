// src/components/ProjectItem.js
import React from 'react';

const ProjectItem = ({ image, title, description, link, codeLink }) => {
  return (
    <div className="project-item">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">I want to see!</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn-see-code">See my code</a>
      </div>
    </div>
  );
};

export default ProjectItem;
