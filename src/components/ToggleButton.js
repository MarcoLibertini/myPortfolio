import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = ({ isNightMode, toggleNightMode }) => {
  return (
    <button onClick={toggleNightMode} className="toggle-button" aria-label={isNightMode ? "Activar modo día" : "Activar modo noche"}>
      <FontAwesomeIcon icon={isNightMode ? faSun : faMoon} />
    </button>
  );
};

export default ToggleButton;