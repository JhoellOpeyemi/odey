import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Nav from "../../components/Nav/Nav";
import Documentary from "../../components/sections/Documentary/Documentary";
import Art from "../../components/sections/Art/Art";
import Lifestyle from "../../components/sections/Lifestyle/Lifestyle";

import "./archive.css";

import { horizontalScroll } from "../../utils";
import PageLoader from "../../components/PageLoader/PageLoader";
import { reveal, mobileReveal } from "./animation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Archive = () => {
  const [archiveLoader, setArchiveLoader] = useState(true);
  const container = useRef();
  const archiveWrapper = useRef();
  const tl = useRef();

  const images = [
    "/assets/archive/smile-and-side-eye.webp",
    "/assets/archive/lifestyle/57.png",
    "/assets/archive/art/davids-throne.jpg",
  ];

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  useGSAP(() => {
    if (archiveLoader == false) {
      if (window.innerWidth > 768) {
        horizontalScroll(archiveWrapper);
        reveal(tl);
      } else {
        mobileReveal(tl);
      }
    }
  }, [{ dependencies: [archiveLoader], scope: container.current }]);

  return (
    <>
      {archiveLoader ? (
        <PageLoader
          text="Archive"
          img={getRandomImage()}
          setFunction={setArchiveLoader}
        />
      ) : (
        <div className="page-container archive-page" ref={container}>
          <Nav />

          <h1 className="page-header">Archive</h1>

          <p className="archive-prompt">Scroll down</p>

          <div className="archive-container" ref={archiveWrapper}>
            <section className="documentary-section section">
              <Documentary />
            </section>
            <section className="art-section section">
              <Art />
            </section>
            <section className="places-section section">
              <Lifestyle />
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Archive;
