import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./lifestyle.css";

import { handleHover, handleLeave, data } from "./utils";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Lifestyle = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(() => {
    if (window.innerWidth < 768) {
      const lifestyles = gsap.utils.toArray(".lifestyle");

      lifestyles.forEach((lifestyle) => {
        const image = lifestyle.querySelector(".lifestyle-image-wrapper");

        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: lifestyle,
              start: "clamp(top 55%)",
              end: "clamp(top 20%)",
              scrub: 1.6,
            },
          })
          .to(image, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.5,
          });
      });
      tl.current = gsap.timeline();
    }
  }, [{ scope: container.current }]);

  return (
    <>
      <div className="lifestyle-wrapper" ref={container}>
        <h2 className="section-header">Lifestyle</h2>

        <div className="lifestyle-scrollx">
          <div className="lifestyle-intro">
            <h1 className="section-header">Lifestyle</h1>
          </div>

          {data.map((src, index) => {
            return (
              <div
                className="lifestyle"
                key={index}
                onMouseOver={(e) => handleHover(e)}
                onMouseLeave={(e) => handleLeave(e)}
              >
                <div className="lifestyle-image-wrapper">
                  <img src={src} alt="" />
                  <div className="image-overlay"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lifestyle;
