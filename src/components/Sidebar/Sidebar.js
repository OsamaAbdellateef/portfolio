import "./sidebar.style.css";
import { Link } from "react-scroll";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Sidebar = ({ expand, setExpand }) => {
  return (
    <div
      className={`sidebar d-flex d-lg-none ${
        expand && "show"
      } d-flex justify-content-center align-items-center`}
    >
      <AiOutlineCloseCircle
        className=" sidebar-close cursor-pointer"
        color="white"
        fontSize={40}
        onClick={() => {
          setExpand(false);
        }}
      />
      <motion.ul
        initial={{ x: -950 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.8 }}
        className="list-unstyled text-center"
      >
        <li className="my-5">
          <Link
            onClick={() => {
              setExpand(false);
            }}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-550}
            className="text-white fs-1 cursor-pointer text-decoration-none "
            duration={100}
          >
            Home
          </Link>
        </li>
        <li className="my-5">
          <Link
            onClick={() => {
              setExpand(false);
            }}
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-white fs-1 cursor-pointer text-decoration-none "
            duration={100}
          >
            About
          </Link>
        </li>
        <li className="my-5">
          <Link
            onClick={() => {
              setExpand(false);
            }}
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-white fs-1 cursor-pointer text-decoration-none "
            duration={100}
          >
            skills
          </Link>
        </li>
        <li className="my-5">
          <Link
            onClick={() => {
              setExpand(false);
            }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-white fs-1 cursor-pointer text-decoration-none "
            duration={100}
          >
            Projects
          </Link>
        </li>
        <li className="my-5">
          <Link
            onClick={() => {
              setExpand(false);
            }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-white fs-1 cursor-pointer text-decoration-none "
            duration={100}
          >
            contact
          </Link>
        </li>
      </motion.ul>
    </div>
  );
};

export default Sidebar;
