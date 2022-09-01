import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: true };

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode((d) => !d);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
