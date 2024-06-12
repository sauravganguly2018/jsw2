import React, { createContext, useState, useEffect, useContext } from 'react';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSizes, setFontSizes] = useState({
  '--font-size-1': 1,
  '--font-size-2': 2,
  '--font-size-3': 3,
  '--font-size-4': 4,
  '--font-size-5': 5,
  '--font-size-6': 6,
  '--font-size-7': 7,
  '--font-size-8': 8,
  '--font-size-9': 9,
  '--font-size-10': 10,
  '--font-size-11': 11,
  '--font-size-12': 12,
  '--font-size-13': 13,
  '--font-size-14': 14,
  '--font-size-14decimal': 14.907,
  '--font-size-15': 15,
  '--font-size-16': 16,
  '--font-size-17': 17,
  '--font-size-18': 18,
  '--font-size-19': 19,
  '--font-size-20': 20,
  '--font-size-21': 21,
  '--font-size-22': 22,
  '--font-size-23': 23,
  '--font-size-24': 24,
  '--font-size-25': 25,
  '--font-size-26': 26,
  '--font-size-27': 27,
  '--font-size-28': 28,
  '--font-size-29': 29,
  '--font-size-30': 30,
  '--font-size-31': 31,
  '--font-size-32': 32,
  '--font-size-33': 33,
  '--font-size-34': 34,
  '--font-size-35': 35,
  '--font-size-36': 36,
  '--font-size-37': 37,
  '--font-size-38': 38,
  '--font-size-39': 39,
  '--font-size-40': 40,
  '--font-size-41': 41,
  '--font-size-42': 42,
  '--font-size-43': 43,
  '--font-size-44': 44,
  '--font-size-45': 45,
  '--font-size-46': 46,
  '--font-size-47': 47,
  '--font-size-48': 48,
  '--font-size-49': 49,
  '--font-size-50': 50,
    // Add other font sizes as needed
  });

  const updateFontSizes = (increment) => {
    setFontSizes((prevSizes) => {
      const newSizes = {};
      for (const [key, value] of Object.entries(prevSizes)) {
        newSizes[key] = value + increment;
      }
      return newSizes;
    });
  };

  const increaseFontSize = () => updateFontSizes(1);
  const decreaseFontSize = () => updateFontSizes(-1);

  useEffect(() => {
    for (const [key, value] of Object.entries(fontSizes)) {
      document.documentElement.style.setProperty(key, `${value}px`);
    }
  }, [fontSizes]);

  return (
    <FontSizeContext.Provider value={{ increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
