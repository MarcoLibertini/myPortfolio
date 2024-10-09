// src/components/AboutMe.js
import React from 'react';

const AboutMe = ({ language }) => {
  const content = {
    en: {
      title: "Hi! I'm Marco!",
      description: `I come from a different background than my peers, but I see it as a potential advantage.
                    I have accumulated 15 years of experience in technical support, design, problem-solving, 
                    and customer service. Today, I have finally become a programmer, something I've always loved since I was a child!`,
    },
    es: {
      title: "¡Hola! Soy Marco!",
      description: `Vengo de un background diferente al de mis pares, pero lo veo como una ventaja.
                    He acumulado 15 años de experiencia en soporte técnico, diseño, resolución de problemas
                    y atención al cliente. Hoy, finalmente me he convertido en programador, algo que siempre me ha encantado desde niño!`,
    },
  };

  return (
    <section className="about-me">
      <div className="about-me-content">
        <img src="/imgs/profile.png" alt="Mi Foto" className="about-me-image" />
        <div className="about-me-text">
          <h1>{content[language].title}</h1>
          <p>{content[language].description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
