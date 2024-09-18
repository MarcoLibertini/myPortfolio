// src/components/Projects.js
import React from 'react';
import ProjectItem from './ProjectItem';

// Array de proyectos
const projectList = [
  {
    image: './imgs/bukowski.jpg',
    title: 'Bukoswki-Quote-Generator',
    description: 'Utilizing web scraping techniques with BeautifulSoup, I compiled a list of Charles Bukowski quotes. This React application fetches a random quote from this list on each user interaction.',
    link: 'enlace/a/tu/proyecto1',
    codeLink: 'enlace/a/tu/codigo1'
  },
  {
    image: './imgs/beerInvaders.jpg',
    title: 'BeerInvaders GamePy',
    description: 'A Python project using the pyGame library that is an imitation of the classic Space Invaders game, reimagined as Beer Invaders. In this game, an alien shoots beer at friends.',
    link: '#',
    codeLink: 'enlace/a/tu/codigo2'
  },
  {
    image: './imgs/teslaSpace.jpg',
    title: 'System Tesla/SpaceX',
    description: 'A C# project built with Windows Forms that controls registrations, deregistrations, and modifications of Tesla and SpaceX vehicles. It also performs checks on the vehicles.',
    link: 'enlace/a/tu/proyecto3',
    codeLink: 'enlace/a/tu/codigo3'
  },
  {
    image: './imgs/dangerzone.jpg',
    title: 'Danger Zone',
    description: 'This project utilizes a dataset of crimes in the United States to create a Kmeans model. The model categorizes areas into low, medium, and high danger levels and maps them with characteristic colors.',
    link: 'enlace/a/tu/proyecto1',
    codeLink: 'enlace/a/tu/codigo4'
  },
  {
    image: './imgs/beerSelector.jpg',
    title: 'Beer Recommendation',
    description: 'Using data analysis on a dataset of beer-related information, this project creates a machine learning model. The model recommends beers based on user preferences, with an interactive method for modifying preferences.',
    link: 'enlace/a/tu/proyecto2',
    codeLink: 'enlace/a/tu/codigo5'
  },
  {
    image: './imgs/dashboard.jpg',
    title: 'Dashboard',
    description: 'Full Stack Final Project: A Single Page Application (SPA) developed as the final project for a Full Stack course. This project involves creating a comprehensive user management system, including user, client, stock, purchase, sale, product, and service management.',
    link: 'enlace/a/tu/proyecto4',
    codeLink: 'enlace/a/tu/codigo6'
  },
  {
    image: './imgs/mush.png',
    title: 'MagicFun',
    description: 'A basic project for managing types of mushrooms using Flask, SQL, and JavaScript would involve creating a CRUD (Create, Read, Update, Delete) application.',
    link: 'enlace/a/tu/proyecto1',
    codeLink: 'enlace/a/tu/codigo7'
  },
  {
    image: './imgs/storee.png',
    title: 'Spotify Classifier',
    description: 'Spotify theme classifier, evaluating whether a user might like a track based on its features, using data analysis and a machine learning model.',
    link: 'enlace/a/tu/proyecto2',
    codeLink: 'enlace/a/tu/codigo8'
  },
  {
    image: './imgs/astro.jpg',
    title: 'Story Collector',
    description: 'A story collector, gathering recounted stories, amusing or not so amusing anecdotes, but ones that are remembered.',
    link: 'enlace/a/tu/proyecto4',
    codeLink: 'enlace/a/tu/codigo9'
  },
  {
    image: './imgs/aho.png',
    title: 'Hangman GamePy',
    description: 'A Python project that imitates the famous Hangman game, where the user guesses a hidden word chosen by the computer by selecting letters. The user has a limited number of attempts, and if they don\'t guess the word within the correct number of attempts, they lose.',
    link: 'enlace/a/tu/proyecto1',
    codeLink: 'enlace/a/tu/codigo1'
  }
];


const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <ProjectItem 
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
