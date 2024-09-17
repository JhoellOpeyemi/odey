import { ReactLenis } from "@studio-freight/react-lenis";
import PropTypes from "prop-types";

function SmoothScroll({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

SmoothScroll.propTypes = {
  children: PropTypes.element,
};

export default SmoothScroll;
