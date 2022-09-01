import "./intro.style.css";
import CV from "../../Osama-Abdellatif-Front-End-CV.pdf";
import Programmer from "../../img/programmer.png";
import Blob from "../../img/s.png";
import { useContext } from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ThemeContext } from "../../themeContext";
import { motion } from "framer-motion";

export default function Intro() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section
      className="intro-section container text-center text-md-start"
      id="home"
    >
      <div className="row align-items-center">
        <div className="intro-left col-12 col-md-6">
          <div className="intro-name">
            <span className={`${darkMode && "text-white"} mt-4 mt-md-0`}>
              Hello! i'm{" "}
            </span>
            <span>Oussama Abdellatif</span>
            <span>
              FrontEnd Developer with high level of experience in web designing
              and developement, producing the quality work
            </span>
          </div>
          <div className="btn-container text-center d-flex justify-content-center justify-content-lg-start">
            <a
              href={CV}
              download
              className="intro-btn button text-decoration-none "
            >
              View CV
            </a>
          </div>
          <div className="intro-icons justify-content-center justify-content-lg-start ">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/OsamaAbdellateef"
              target="_blank"
            >
              <AiFillGithub fontSize={40} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/osama-abdellateif"
              target="_blank"
            >
              <AiOutlineLinkedin fontSize={40} />
            </motion.a>
            <motion.a
              href="https://twitter.com/OsamaAbdo98"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <AiOutlineTwitter fontSize={40} />
            </motion.a>
          </div>
        </div>
        <div className="intro-right d-none d-md-flex">
          <img className="programmer" src={Programmer} />
          <img className="blob vector1" width={150} src={Blob} />
          <img className="blob vector2" width={150} src={Blob} />
        </div>
      </div>
    </section>
  );
}
