import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Agenda from "../../components/sections/Agenda/Agenda";
import Dancing from "../../components/sections/Dancing/Dancing";
import Ebitimi from "../../components/sections/Ebitimi/Ebitimi";
import Nav from "../../components/Nav/Nav";
import Untitled from "../../components/sections/Untitled/Untitled";
import "./projects.css";
import PageLoader from "../../components/PageLoader/PageLoader";
import { horizontalScroll } from "../../utils";
import { mobileReveal, reveal } from "./animation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [projectsLoader, setProjectsLoader] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const container = useRef();
  const projectsWrapper = useRef();
  const tl = useRef();

  const images = [
    "/assets/projects/ebitimi1.webp",
    "/assets/projects/untitled2.webp",
    "/assets/projects/political-agenda.webp",
  ];

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  useGSAP(() => {
    if (projectsLoader == false) {
      if (width > 768) {
        horizontalScroll(projectsWrapper);
        reveal(tl);
      } else {
        mobileReveal(tl);
      }
    }
  }, [{ dependencies: [projectsLoader], scope: container.current }]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      {projectsLoader ? (
        <PageLoader
          text="Projects"
          img={getRandomImage()}
          setFunction={setProjectsLoader}
        />
      ) : (
        <div className="page-container" ref={container}>
          <Nav />
          <h1 className="page-header">Projects</h1>

          <div className="projects-wrapper" ref={projectsWrapper}>
            <Ebitimi />
            <Agenda />
            <Dancing />
            <Untitled />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
