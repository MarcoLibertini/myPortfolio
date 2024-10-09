import React from 'react';
import ProjectItem from './ProjectItem';
import { projectContent as enContent } from '../translations/en';
import { projectContent as esContent } from '../translations/es';

const Projects = ({ language }) => {
  const projects = language === 'en' ? enContent : esContent;

  return (
    <section className="projects">
      <h2>{language === 'en' ? 'Projects' : 'Proyectos'}</h2>
      {projects.map((project, index) => (
        <ProjectItem
          language={language}
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
          codeLink={project.codeLink}
        />
      ))}
    </section>
  );
};

export default Projects;
