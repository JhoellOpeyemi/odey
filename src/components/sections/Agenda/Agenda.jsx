import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./agenda.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Agenda = () => {
  const agenda = useRef();
  const tl = useRef();

  useGSAP(() => {
    if (window.innerWidth < 768) {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: agenda.current,
            start: "clamp(top 60%)",
            end: "clamp(top top)",
            scrub: 1,
          },
        })
        .to(".agenda-image-1, .agenda-image-2", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          stagger: 1,
        })
        .from(".agenda-text", {
          opacity: 0,
        });
    }
  }, [{ scope: agenda.current }]);

  return (
    <div className="projects" ref={agenda}>
      <div className="agenda-text">
        <h3>Political Agenda (2024)</h3>
      </div>

      <div className="agenda-image-1">
        <img src="/assets/projects/political-agenda2.webp" alt="" />
      </div>

      <div className="agenda-image-2">
        <img src="/assets/projects/political-agenda.webp" alt="" />
      </div>
    </div>
  );
};

export default Agenda;
