import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";

import "./pageLoader.css";
import { loaderAnimation } from "./animation";

gsap.registerPlugin(useGSAP);

const PageLoader = ({ text, img, setFunction }) => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      loaderAnimation(tl, container, setFunction);
    },
    { scope: container.current }
  );

  return (
    <div className="page-loader-container" ref={container}>
      <div className="page-background"></div>
      <p className="page-text">{text}</p>
      <div className="page-loader-image">
        <img src={img} alt="" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

PageLoader.propTypes = {
  setFunction: PropTypes.func,
  text: PropTypes.string,
  img: PropTypes.string,
};

export default PageLoader;
