import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ToggleButton from './components/ToggleButton'; // Importa el componente ToggleButton
import './styles.css';
import './nightmode.css';

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode', !isNightMode);
  };

  return (
    <div className="App">
      <ToggleButton isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;