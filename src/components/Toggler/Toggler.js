import "./toggler.style.css";
import Moon from "../../img/moon.png";
import Sun from "../../img/sun.png";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../themeContext";

const Toggler = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("dark mode:", darkMode);
  }, [darkMode]);
  return (
    <div
      className="t cursor-pointer"
      onClick={() => {
        toggleTheme();
      }}
    >
      <img src={Sun} className="t-icon" />
      <img src={Moon} className="t-icon" />
      <div
        style={{ left: darkMode ? "25px" : "0px" }}
        className="t-button "
      ></div>
    </div>
  );
};

export default Toggler;
