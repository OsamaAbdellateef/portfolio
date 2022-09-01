import { useState } from "react";
import "./ProjectCard.style.css";
import Img from "../../img/san3etna.png";
import { AiOutlineTool } from "react-icons/ai";
import { HiOutlineInformationCircle, HiOutlineZoomIn } from "react-icons/hi";
import { MdOutlinePreview } from "react-icons/md";
import { GrFormClose, GrFormView, GrView } from "react-icons/gr";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ProjectCard = ({
  viewImg,
  tools,
  description,
  name,
  mainTech,
  img,
  link,
}) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 5, delay: 3 }}
      className="col-12 col-md-4 my-3"
    >
      <div className="project-card rounded-2 border-0 h-100 p-2">
        <div className="img-container position-relative">
          <img src={img} className="card-img-top" alt="projec img" />
          <div
            onClick={() => setShow(true)}
            className="project-card-overlay position-absolute top-0 d-flex align-items-center justify-content-center w-100 h-100"
          >
            <HiOutlineZoomIn fontSize={50} color="white" />
          </div>
        </div>
        <div className="p-4">
          <h1 className="fs-1 text-center fw-semibold theme-light">{name}</h1>
          <span className="fs-3 theme-light d-block text-center fw-light">
            ({mainTech})
          </span>

          <p className="fs-3 d-flex theme-light">
            <span className="theme-light fw-light d-flex align-items-center">
              <MdOutlinePreview className="me-2" fontSize={25} />
              View Demo
            </span>
            <a target="_blank" className="p-3" href={link}>
              {name}
            </a>
          </p>
          <div className="px-4">
            <hr />
          </div>

          <p className="fs-3">
            <span className="fw-bold d-flex align-items-center theme-light">
              <AiOutlineTool className="me-2" fontSize={25} />
              tools
            </span>
            <span className="p-3 fw-bold fs-4 theme-light">
              {tools?.map((t) => t + ", ")}
            </span>
          </p>
          <p className="px-4">
            <hr />
          </p>
          <p className="fs-3">
            <span className="fw-bold d-flex align-items-center theme-light">
              <HiOutlineInformationCircle className="me-2" fontSize={25} />
              description
            </span>
            <span className=" d-block p-2 fs-3 theme-light">{description}</span>
          </p>
        </div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size="xl"
          className="p-0"
        >
          <Modal.Body className="p-0">
            <GrFormClose
              onClick={() => {
                setShow(false);
              }}
              color="red"
              fontSize={30}
              className="modal-close-icon custom-shadow cursor-pointer  m-4 position-absolute p-1 bg-white rounded-circle right-0"
            />
            <img src={viewImg} className="w-100" />
          </Modal.Body>
        </Modal>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
