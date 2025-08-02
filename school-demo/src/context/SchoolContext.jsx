import React, { createContext, useState } from 'react';

export const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [aboutText, setAboutText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <SchoolContext.Provider value={{ aboutText, setAboutText, imageUrl, setImageUrl }}>
      {children}
    </SchoolContext.Provider>
  );
};
