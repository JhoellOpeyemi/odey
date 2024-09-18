import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Nav from "../../components/Nav/Nav";
import PageLoader from "../../components/PageLoader/PageLoader";

import "./contact.css";

gsap.registerPlugin(useGSAP);

const Contact = () => {
  const [contactLoader, setContactLoader] = useState(true);
  const container = useRef();
  const tl = useRef();

  const images = ["/assets/odey/1.jpg", "/assets/odey/2.jpg"];

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  useGSAP(() => {
    tl.current = gsap
      .timeline({ delay: 0.1 })
      .from("nav", {
        opacity: 0,
        duration: 0.3,
      })
      .from(".contact-header", { opacity: 0, duration: 0.5 }, "-=0.1")
      .from(".large-text", { opacity: 0, duration: 0.5 }, "-=0.1")
      .from(
        ".contact-links a",
        { opacity: 0, duration: 0.5, stagger: 0.1 },
        "-=0.1"
      );
  }, [{ scope: container.current }]);

  return (
    <>
      {contactLoader ? (
        <PageLoader
          text="Contact"
          img={getRandomImage()}
          setFunction={setContactLoader}
        />
      ) : (
        <div className="page-container contact-page" ref={container}>
          <Nav />

          <h1 className="contact-header">Contact</h1>

          <div className="contact-container">
            <div className="large-text">
              <h2>Looking to book a session or collaborate on a project?</h2>
              {/* <p>Email to inquire about rates and availability</p> */}

              <a href="mailto: anthonyodey8@gmail.com" target="_blank">
                Click to send a mail
              </a>
            </div>

            <div className="contact-links">
              <a href="https://www.instagram.com/sr_odey/" target='_blank'>Instagram</a>
              <a href="https://www.pinterest.com/sr_odey/" target="_blank">
                Pinterest
              </a>
              <a href="https://www.linkedin.com/in/anthony-odey-78b63b189/" target='_blank'>LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
