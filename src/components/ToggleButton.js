import React from 'react';

const ToggleButton = ({ isNightMode, toggleNightMode }) => {
  return (
    <button onClick={toggleNightMode} className="toggle-button">
      {isNightMode ? 'Modo Día' : 'Modo Noche'}
    </button>
  );
};

export default ToggleButton;