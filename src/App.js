import "./App.css";
import { useState, useContext } from "react";
import "../node_modules/react-circular-progressbar/dist/styles.css";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import { ThemeContext } from "./themeContext";

function App() {
  const [expand, setExpand] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`App ${darkMode && "dark"}`}>
      <Navbar darkMode={darkMode} expand={expand} setExpand={setExpand} />
      <Sidebar expand={expand} setExpand={setExpand} />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
