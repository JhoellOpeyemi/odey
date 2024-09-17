import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./dancing.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Dancing = () => {
  const dancing = useRef();
  const tl = useRef();

  useGSAP(() => {
    if (window.innerWidth < 768) {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: dancing.current,
            start: "clamp(top 60%)",
            end: "clamp(top top)",
            scrub: 1,
          },
        })
        .to(".dancing-image-1, .dancing-image-2", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          stagger: 1,
        })
        .to(".dancing-text", {
          opacity: 1,
        });
    }
  }, [{ scope: dancing.current }]);

  return (
    <div className="projects" ref={dancing}>
      <div className="dancing-text">
        <h3>What if we keep dancing? (2024)</h3>
      </div>

      <div className="dancing-image-1">
        <img src="/assets/projects/dancing1.webp" alt="" />
      </div>

      <div className="dancing-image-2">
        <img src="/assets/projects/dancing2.webp" alt="" />
      </div>
    </div>
  );
};

export default Dancing;
