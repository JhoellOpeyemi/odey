import { useRef, useEffect, useState } from "react";

const Trailer = () => {
  const trailer = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const animateTrailer = (e, imageHover) => {
      setX(e.clientX - trailer.current.offsetWidth / 2);
      setY(e.clientY - trailer.current.offsetHeight / 2);

      trailer.current.style.transform = `translate(${x}px, ${y}px) scale(${
        imageHover ? 2.75 : 1
      })`;
      trailer.current.style.transition = "transform 400ms linear";
      trailer.current.style.opacity = 1;
      trailer.current.style.backgroundColor = "#fff";
      trailer.current.style.mixBlendMode = "difference";
    };

    window.onmousemove = (e) => {
      const image = e.target.closest("img");
      const imageHover = image !== null;

      animateTrailer(e, imageHover);
    };
  }, [x, y]);

  return <div ref={trailer} className="trailer" />;
};

export default Trailer;
