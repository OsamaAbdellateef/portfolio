import "./heading.style.css";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext";

export default function Heading({ text, marker }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="heading-container">
      <h1
        className={`${
          darkMode ? "text-light" : "text-black-50"
        } custom-heading`}
      >
        {text} <span className="marker">{marker}</span>
      </h1>
    </div>
  );
}
