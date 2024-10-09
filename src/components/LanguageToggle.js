import React from 'react';

const LanguageToggle = ({ language, toggleLanguage }) => {
  return (
    <button onClick={toggleLanguage} className="language-toggle">
      {language === 'en' ? 'Traducir a Español' : 'Translate to English'}
    </button>
  );
};

export default LanguageToggle;