import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <img src="/imgs/profile.png" alt="Mi Foto" className="about-me-image" />
        <div className="about-me-text">
          <h1>Hi! I'm Marco!</h1>
          <p>
          I come from a different background than my peers, but I see it as a potential advantage. And I
                        can prove it. I have accumulated 15 years of experience in technical support, design,
                        problem-solving, and customer service. This journey has presented me with countless challenges and opportunities for
                        development. Today, I have finally become a programmer, something I've always loved since I was
                        a child!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
