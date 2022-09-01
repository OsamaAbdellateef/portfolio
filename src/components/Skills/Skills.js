import Heading from "../Heading/Heading";
import SkillCard from "../SkillCard/SkillCard";
import { CircularProgressbar } from "react-circular-progressbar";
import "./skills.style.css";

const skillsArr = [
  { name: "HTML", perc: 95 },
  { name: "CSS", perc: 95 },
  { name: "Bootstrap", perc: 95 },
  { name: "MUI", perc: 75 },
  { name: "AntDesign", perc: 70 },
  { name: "JavaScript", perc: 90 },
  { name: "JQuery", perc: 80 },
  { name: "React", perc: 90 },
  { name: "Redux", perc: 90 },
  { name: "Next.js", perc: 75 },
  { name: "Node.js", perc: 70 },
  { name: "MongoDB", perc: 75 },
  { name: "Express", perc: 70 },
];

export default function Skills() {
  return (
    <section className="skills-section mlgtp" id="skills">
      <div className="container">
        <div className="my-5">
          <Heading text="My" marker="Skills" />
        </div>
        <div className="skills-preview my-5">
          <div className="row justify-content-center">
            {skillsArr.map((s, index) => (
              <div className="col-3 my-3 col-md-2" key={index}>
                <div className="w-75">
                  <CircularProgressbar value={s.perc} text={s.perc + "%"} />
                  <p className="fs-2 fw-light my-2 text-center">{s.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
