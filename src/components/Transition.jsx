import { useState } from "react";
import PropTypes from "prop-types";

const Transition = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);

  return <div>{displayChildren}</div>;
};

Transition.propTypes = {
  children: PropTypes.element,
};

export default Transition;
