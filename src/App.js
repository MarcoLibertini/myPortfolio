// src/App.js
import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ToggleButton from './components/ToggleButton';
import LanguageToggle from './components/LanguageToggle';
import './styles.css';
import './nightmode.css';
import '@fortawesome/fontawesome-svg-core/styles.css';


const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [language, setLanguage] = useState('en'); // Estado para manejar el idioma

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode', !isNightMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  
  return (
    <div className="App">
      <ToggleButton isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
      <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      <AboutMe language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
};

export default App;
