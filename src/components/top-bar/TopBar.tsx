import { DownArrow, Globe } from 'assets/icons';
import React, { useEffect, useState } from 'react';

const TopBar = ({selectedLanguage, setSelectedLanguage}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setIsDropdownOpen(false); 
    setSelectedLanguage(language);
    console.log(language)
    console.log(isDropdownOpen)
  };
  
  const languages = ['English', 'Malayalam', 'Hindi'];

  return (
    <div className="h-[60px] bg-white shadow-lg fixed top-0 w-[calc(100%-15rem)] z-[999]">
      <div className="flex flex-row h-full px-8 justify-between items-center">
        <div></div>
        <div className="relative flex flex-row justify-center items-center">
            <Globe></Globe>
          <div
            className="mx-2 text-primary cursor-pointer"
            onClick={toggleDropdown}
          >
            {selectedLanguage}
          </div>
          <DownArrow />
          {isDropdownOpen && (
            <div className="absolute top-[50px] right-0 mt-1 bg-white border border-gray-200 shadow-md">
              {languages.map((language) => (
                <div
                  key={language}
                  className={`cursor-pointer px-4 py-2 ${
                    language === selectedLanguage ? 'bg-primary text-white' : ''
                  }`}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
