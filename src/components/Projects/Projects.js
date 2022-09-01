import React from "react";
import Heading from "../Heading/Heading";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.style.css";
import San3etna1 from "../../img/san3etna.png";
import San3etna2 from "../../img/san3etna2.png";
import ECommerce1 from "../../img/e-commerce.png";
import ECommerce2 from "../../img/e-commerce2.PNG";
import NFT1 from "../../img/NFT.png";
import NFT2 from "../../img/NFT2.png";
import Game from "../../img/game.png";

const projects = [
  {
    link: "https://osamaabdellateef.github.io/g2020/?fbclid=IwAR126azBBSfLTXM1xSjwXNYcmfGiM-uYLW94JdTzXUEnbicJaM9FY-O-PW4#/",
    viewImg: San3etna1,
    img: San3etna2,
    tools: ["React", "Redux", "MUI", "Firebase", "Bootstrap"],
    name: "San3enta",
    mainTech: "React.js",
    description: `A freelancing website for craftsmen and users can post the needed job anybody can
               apply as a user or client ,User can select the craftsman by sending him a request and
                can track the process of the request .`,
  },
  {
    link: "https://aaaaaaaa-alpha.vercel.app/",
    viewImg: ECommerce1,
    img: ECommerce2,
    tools: ["React", "Vanilla CSS"],
    name: "E-commerce",
    mainTech: "React.js",
    description: `Training on how to use vanilla CSS without using any CSS library`,
  },
  {
    link: "https://nft-neon-delta.vercel.app/",
    viewImg: NFT1,
    img: NFT2,
    tools: ["Next.js", "Sass", "Tailwind"],
    name: "NFT-Market Place",
    mainTech: "Next.js",
    description: `Web App for youtube channel "فري لانس بالعربي "`,
  },
  {
    link: "https://memory-game-flame-eight.vercel.app/",
    viewImg: Game,
    img: Game,
    tools: ["React", "SASS", "Bootstrap"],
    name: "Memory Game",
    mainTech: "React.js",
    description: `It is a react memory game , practicing on arrays react logic`,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <Heading text="My" marker="Projects" />
        <div className="projects-preview my-5">
          <div className="row justify-content-center">
            {projects.map((p, index) => (
              <ProjectCard
                key={index}
                link={p.link}
                viewImg={p.viewImg}
                img={p.img}
                tools={p.tools}
                name={p.name}
                mainTech={p.mainTech}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
