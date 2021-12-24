import React, { useState, useContext } from 'react';


const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  
 



  return (
    <ThemeContext.Provider
      value={{
      
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
