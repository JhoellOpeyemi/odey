import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./documentary.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Documentary = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(() => {
    if (window.innerWidth < 768) {
      const documentary = gsap.utils.toArray(".documentary");

      documentary.forEach((doc) => {
        const image = doc.querySelector(".image-wrapper");
        const texts = doc.querySelectorAll("p");

        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: doc,
              start: "clamp(top 60%)",
              end: "clamp(top 15%)",
              scrub: 1.6,
            },
          })
          .to(image, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.5,
          })
          .from(texts, {
            opacity: 0,
            duration: 0.5,
          });
      });
      tl.current = gsap.timeline();
    }
  }, [{ scope: container.current }]);

  return (
    <div className="documentary-wrapper" ref={container}>
      <h2 className="section-header">Archive</h2>

      <div className="documentary-scrollx">
        <div className="documentary smile">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/smile-and-side-eye.webp" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">
              <span className="line-block">Smile and bombastic side eye</span>{" "}
              (2024)
            </p>
          </div>
        </div>

        <div className="documentary yellow">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/up-yellow-house.webp" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">
              <span className="line-block">Up yellow house</span> (2024)
            </p>
          </div>

          <p className="desc">
            <span className="line-block">
              <span>This picture pays homage to the </span>
            </span>
            <span className="line-block">
              <span>trying efforts of kids in yellow </span>
            </span>
            <span className="line-block">
              <span>house that had to play while still </span>
            </span>
            <span className="line-block">
              <span>keeping their uniforms clean.</span>
            </span>
          </p>
        </div>

        <div className="documentary manicure">
          <div className="image-n-title">
            <p className="title">
              <span className="line-block">Street manicure</span> (2024)
            </p>

            <div className="image-wrapper">
              <img src="/assets/archive/street-manicure.webp" alt="" />
              <div className="image-overlay"></div>
            </div>
          </div>

          <p className="desc">
            <span className="line-block">
              <span>
                This one picture is a representation of two things. The{" "}
              </span>
            </span>
            <span className="line-block">
              <span>
                desire to keep clean even when it isn&apos;t luxurious and{" "}
              </span>
            </span>
            <span className="line-block">
              <span>
                what a stereotypical African man looks like. It&apos;s not{" "}
              </span>
            </span>
            <span className="line-block">
              <span>
                everyday you can hear a man say “let&apos;s go get our nails{" "}
              </span>
            </span>
            <span className="line-block">
              <span>
                done” where I&apos;m from, and walk into a salon to do that.{" "}
              </span>
            </span>
          </p>
        </div>

        <div className="documentary shoes">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/thousand-shoes.webp" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">
              <span className="line-block">A thousand shoes and two feet</span>{" "}
              (2024)
            </p>
          </div>

          <p className="desc">
            <span className="line-block">
              <span>Amidst a sea of unpurchased dreams and </span>
            </span>
            <span className="line-block">
              <span>
                economic strife, one man&apos;s solitary effort stands{" "}
              </span>
            </span>
            <span className="line-block">
              <span>
                out. &apos;A Thousand Shoes, and Two Feet&apos; captures{" "}
              </span>
            </span>
            <span className="line-block">
              <span>the struggle of a vendor whose hope and </span>
            </span>
            <span className="line-block">
              <span>perseverance shine through the shadows of </span>
            </span>
            <span className="line-block">
              <span>economic hardship, symbolizing the relentless </span>
            </span>
            <span className="line-block">
              <span>pursuit of a better tomorrow against all odds.</span>
            </span>
          </p>
        </div>

        <div className="documentary father-land">
          <div className="image-n-title">
            <p className="title">
              <span className="line-block">
                Why would i serve my father land?
              </span>{" "}
              (2024)
            </p>

            <div className="image-wrapper">
              <img src="/assets/archive/father-land.png" alt="" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentary;
