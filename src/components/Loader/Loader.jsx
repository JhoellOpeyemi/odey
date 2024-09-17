import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";

import "./loader.css";
import { animation, data } from "./utils";

gsap.registerPlugin(useGSAP);

const Loader = ({ setLoader }) => {
  const container = useRef();
  const loaderImages = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      const images = gsap.utils.toArray(loaderImages.current.children);
      const width = loaderImages.current.offsetWidth;

      animation(tl, loaderImages, container, images, width, setLoader);
    },
    { scope: container.current }
  );

  return (
    <div className="loader-container" ref={container}>
      <p className="loader-text">Documenting...</p>

      <div className="loader-images" ref={loaderImages}>
        {data.map((src, index) => {
          return (
            <div className="loader-image" key={index}>
              <img src={src} alt="" />
              <div className="overlay"></div>
            </div>
          );
        })}
      </div>

      <div className="mask"></div>
    </div>
  );
};

Loader.propTypes = {
  setLoader: PropTypes.func,
};

export default Loader;
