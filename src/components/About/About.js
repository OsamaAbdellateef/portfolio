import { useContext } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Heading from "../Heading/Heading";
import "./about.style.css";
import { FcGraduationCap } from "react-icons/fc";
import AboutImg from "../../img/about-me.jpg";
import { ThemeContext } from "../../themeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className="about-section mlgtp mlgbtm" id="about">
      <div className="container">
        <Heading marker="Me" text="About" />
        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <div className="about-left">
              <p
                className={`fs-3 ${!darkMode ? "text-black-50" : "text-light"}`}
              >
                Hi there! I'm <span className="fw-bolder fs-2">Osama</span>, I'm
                a web developer with a vast array of knowledge in front-end
                development, I'm dedicated to perfecting my skills by learning
                from more seasoned developers.
              </p>
              <h2
                className={`mt-4 fw-bold ${
                  darkMode ? "text-light" : "text-black-50"
                } d-flex align-items-center`}
              >
                <AiOutlineStar className="me-2" /> Experience
              </h2>
              <ul className="px-5 list-unstyled">
                <li className="fs-3 my-3">
                  <p>
                    <span
                      className={`fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      Algoriza
                    </span>
                    ,
                    <span
                      className={`fst-italic fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      Remotely— Front-End developer (March-May 2022)
                    </span>
                    <br />
                    <span
                      className={`${
                        darkMode ? "text-light" : "text-black-50"
                      } ms-2`}
                    >
                      Trainee at Algoriza company as a front-end developer.
                    </span>
                  </p>
                </li>
                <li className="fs-3 my-3">
                  <p>
                    <span
                      className={`fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      Freelancer Project
                    </span>
                    ,
                    <span
                      className={`fst-italic fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      Remotely— Front-End developer(May-June 2022).
                    </span>
                    <br />
                    <span
                      className={`${
                        darkMode ? "text-light" : "text-black-50"
                      } ms-2`}
                    >
                      Front-end developer at (فري لانسر بالعربي )youtube
                      channel.
                    </span>
                  </p>
                </li>
              </ul>

              {/*Education*/}
              <h2
                className={`mt-4 fw-bold ${
                  darkMode ? "text-light" : "text-black-50"
                } d-flex align-items-center`}
              >
                <FcGraduationCap fontSize={25} className="me-2" /> Education
              </h2>
              <ul className="px-5 list-unstyled">
                <li className="fs-3 my-3">
                  <p>
                    <span
                      className={`fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      ITI Mansoura
                    </span>
                    ,
                    <span
                      className={`fst-italic fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      MEARN Stack
                    </span>
                    <br />
                    <span
                      className={`${
                        darkMode ? "text-light" : "text-black-50"
                      } ms-2`}
                    >
                      Trainee at ITI in MEARN intensive code camp track (April
                      2022 – July 2022 ) .
                    </span>
                  </p>
                </li>
                <li className="fs-3 my-3">
                  <p>
                    <span
                      className={`fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      Minia University
                    </span>
                    ,
                    <span
                      className={`fst-italic fw-bold ${
                        darkMode ? "text-light" : "text-black-50"
                      }`}
                    >
                      Faculty of computers and information.
                    </span>
                    <br />
                    <p className="theme-light d-flex flex-column flex-md-row ">
                      <span className="theme-light">
                        <span className="fw-bold">-Department: </span>
                        <span className="me-3">computer science </span>
                      </span>
                      <span className="theme-light">
                        <span className="fw-bold">-Grade: </span>
                        <span>very good</span>
                      </span>
                    </p>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-block">
            <div className="about-right">
              <div className="img-container w-100">
                <img src={AboutImg} className="w-100" alt="about me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
