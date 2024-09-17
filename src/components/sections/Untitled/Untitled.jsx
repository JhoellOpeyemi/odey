import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./untitled.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Untitled = () => {
  const untitled = useRef();
  const tl = useRef();

  useGSAP(() => {
    if (window.innerWidth < 768) {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: untitled.current,
            start: "clamp(top 60%)",
            end: "clamp(top top)",
            scrub: 1,
          },
        })
        .to(".untitled-image-1, .untitled-image-2", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          stagger: 1,
        })
        .from(".dancing-text", {
          opacity: 0,
        });
    }
  }, [{ scope: untitled.current }]);

  return (
    <div className="projects" ref={untitled}>
      <div className="untitled-text">
        <h3>Untitled (2024)</h3>
      </div>

      <div className="untitled-image-1">
        <img src="/assets/projects/untitled1.webp" alt="" />
      </div>

      <div className="untitled-image-2">
        <img src="/assets/projects/untitled2.webp" alt="" />
      </div>
    </div>
  );
};

export default Untitled;
