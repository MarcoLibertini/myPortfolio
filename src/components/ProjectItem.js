// src/components/ProjectItem.js
import React from 'react';



const ProjectItem = ({ language, image, title, description, link, codeLink }) => {

  return (
    <div className="project-item">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {language === 'en' ? 'I want to see!' : '¡Quiero ver!'}
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn-see-code">
          {language === 'en' ? 'See my code' : 'Ve mi código'}
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
