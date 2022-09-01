import "./Navbar.style.css";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import Toggler from "../Toggler/Toggler";

export default function Navbar({ expand, setExpand, darkMode }) {
  return (
    <nav
      className={`navbar-container d-flex align-items-center ${
        darkMode && "dark"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-left">
          <Link
            offset={-550}
            to="home"
            className="navbar-logo text-decoration-none"
          >
            <span>O</span>
            <span>A</span>
          </Link>
          <Toggler />
        </div>
        <div className="navbar-right d-none d-lg-flex">
          <div className="navbar-list">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-550}
                  duration={100}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Projects
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
          <Link
            className="button text-decoration-none"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Contact
          </Link>
        </div>
        <AiOutlineMenu
          className="d-block cursor-pointer d-lg-none theme-light"
          fontSize={30}
          onClick={() => {
            setExpand(true);
          }}
        />
      </div>
    </nav>
  );
}
