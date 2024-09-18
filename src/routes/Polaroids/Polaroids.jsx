import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  data,
  handleHover,
  handleLeave,
  mobileReveal,
  polaroidsReveal,
  reveal,
} from "./utils";

import "./polaroids.css";
import Nav from "../../components/Nav/Nav";
import PageLoader from "../../components/PageLoader/PageLoader";
import { horizontalScroll } from "../../utils";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Polaroids = () => {
  const [polaroidsLoader, setPolaroidsLoader] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const container = useRef();
  const polaroidsWrapper = useRef();
  const polaroids = useRef();
  const tl = useRef();

  const getRandomImage = () => {
    return data[Math.floor(Math.random() * data.length)].img;
  };

  useGSAP(() => {
    if (polaroidsLoader == false) {
      const images = gsap.utils.toArray(polaroidsWrapper.current.children);

      if (width > 768) {
        reveal(tl, images);
        horizontalScroll(polaroidsWrapper);
      } else {
        mobileReveal(tl);
        polaroidsReveal(images);
      }
    }
  }, [{ dependencies: [polaroidsLoader], scope: container.current }]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      {polaroidsLoader ? (
        <PageLoader
          text="Polaroids"
          img={getRandomImage()}
          setFunction={setPolaroidsLoader}
        />
      ) : (
        <div className="page-container" ref={container}>
          <Nav />
          <h1 className="page-header">Polaroids</h1>

          <p className="polaroids-prompt">Scroll to view polaroids</p>

          <div className="polaroids-wrapper" ref={polaroidsWrapper}>
            {data.map((data, index) => {
              return (
                <div
                  className="polaroids"
                  key={index}
                  ref={polaroids}
                  onMouseOver={(e) => handleHover(e)}
                  onMouseLeave={(e) => handleLeave(e)}
                >
                  <div className="img-wrapper">
                    <img src={data.img} alt={data.name} />
                  </div>
                  <p>{data.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Polaroids;
