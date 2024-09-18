import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./art.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Art = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(() => {
    if (window.innerWidth < 768) {
      const arts = gsap.utils.toArray(".art");

      arts.forEach((art) => {
        const image = art.querySelector(".image-wrapper");
        const text = art.querySelector("p");

        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: art,
              start: "clamp(top 55%)",
              end: "clamp(top 15%)",
              scrub: 1.6,
            },
          })
          .to(image, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.5,
          })
          .from(text, {
            opacity: 0,
            duration: 0.5,
          });
      });
      tl.current = gsap.timeline();
    }
  }, [{ scope: container.current }]);

  return (
    <div className="art-wrapper" ref={container}>
      <h2 className="section-header">Art</h2>

      <div className="art-scrollx">
        <div className="art-intro">
          <h1 className="section-header">Art</h1>
        </div>

        <div className="art chiefs">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/art/chiefs.jpg" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">Chiefs</p>
          </div>
        </div>

        <div className="art david">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/art/davids-throne.jpg" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">David&apos;s throne</p>
          </div>
        </div>

        <div className="art shelosh">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/art/shelosh.jpg" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">Shelosh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
