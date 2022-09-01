import "./contact.style.css";
import { BsTelephonePlus } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactInfo = () => (
  <div className="contact-left">
    <h1 style={{ fontSize: "6rem" }} className="mb-5 fw-bolder theme-light">
      Let's discuess
      <br /> your project
    </h1>
    <div className="d-flex flex-column align-items-start">
      <div className="d-flex justify-content-center align-items-center my-4">
        <BsTelephonePlus className="me-2" fontSize={25} color="#FF745C" />
        <span className="text-black-50 fs-1 theme-light">+2082848843</span>
      </div>
      <div className="d-flex justify-content-center align-items-center my-4">
        <AiOutlineMail className="me-2" fontSize={25} color="#FF745C" />
        <span className="text-black-50 fs-1 theme-light">
          osama.abdellatif.mahmoud@gmail.com
        </span>
      </div>
      <div className="d-flex justify-content-center align-items-center my-4">
        <HiOutlineLocationMarker
          className="me-2"
          fontSize={25}
          color="#FF745C"
        />
        <span className="text-black-50 fs-1 theme-light">
          Egypt, Cairo, 6th of October
        </span>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  const resetForm = () => {
    for (let prop in user) {
      setUser((u) => {
        return { ...u, [prop]: "" };
      });
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    for (let prop in user) {
      console.log("------------------");
      for (let prop in user) {
        if (user[prop].length == 0) {
          setValid(false);
          console.log("Oops");
          break;
        } else {
          if (
            !user.user_email.match(
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            )
          ) {
            setValid(false);
            break;
          }
        }
        setValid(true);
      }
    }
  }, [user]);

  useEffect(() => {
    console.log("valid:", valid);
  }, [valid]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [show]);

  const formRef = useRef();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3wk3qss",
        "template_nrfkfv9",
        formRef.current,
        "-MDUZ97ARRv5uTqWG"
      )
      .then(
        (result) => {
          setShow(true);
          resetForm();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section mlgtp" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <ContactInfo />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-3 my-5 theme-light">
              <span className="fw-bolder ">What's your story?</span> Get in
              touch always available for freelancing if the right project comes
              along me
            </p>
            <div className="contact-right">
              <form
                ref={formRef}
                className="d-flex flex-column"
                onSubmit={handleSubmit}
              >
                <div className="my-4 input-container w-100">
                  <input
                    type="text"
                    className="p-3 bg-transparent w-100 theme-light"
                    placeholder="your name"
                    name="user_name"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={user.user_name}
                  />
                  <span></span>
                </div>
                <div className="my-4 input-container w-100">
                  <input
                    type="text"
                    className="p-3 bg-transparent w-100 theme-light"
                    placeholder="subject"
                    name="user_subject"
                    onChange={handleChange}
                    value={user.user_subject}
                  />
                  <span></span>
                </div>
                <div className="my-4 input-container w-100">
                  <input
                    type="text"
                    className="p-3 bg-transparent w-100 theme-light"
                    placeholder="email@gmail.com"
                    name="user_email"
                    onChange={handleChange}
                    value={user.user_email}
                  />
                  <span></span>
                </div>
                <textarea
                  placeholder="message"
                  className="p-3 my-4 fs-2 bg-transparent theme-light"
                  rows={5}
                  name="message"
                  onChange={handleChange}
                  value={user.message}
                ></textarea>
                <div className="">
                  <Button
                    type="submit"
                    className="w-25 my-4 p-3 fs-4 bgColor-primary border-0"
                    disabled={loading || !valid ? true : false}
                  >
                    Contact
                  </Button>
                </div>
                <div className={`snackbar ${!show && "hide"}`}>
                  <h4 className="m-0">
                    <AiOutlineCheckCircle fontSize={25} /> email sent
                    successfully
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
