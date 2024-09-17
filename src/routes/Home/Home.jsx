import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Loader from "../../components/Loader/Loader";

import "./home.css";
import { mobileReveal, reveal, scrollReveal } from "./animation";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const heroContainer = useRef();
  const tl = useRef();
  const scrollTl = useRef();

  const [loader, setLoader] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useGSAP(
    () => {
      if (loader == false) {
        const texts = gsap.utils.toArray(".hero-header span");

        if (width > 768) {
          reveal(tl, texts);
        } else {
          mobileReveal(tl, texts);
          scrollReveal(scrollTl);
        }
      }
    },
    { dependencies: [loader], scope: heroContainer.current }
  );

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      {loader ? (
        <Loader setLoader={setLoader} />
      ) : (
        <>
          <div className="hero-container" ref={heroContainer}>
            <Nav setLoader={setLoader} />
            <div className="hero-wrapper">
              <h1 className="hero-header">
                <span className="line-block">
                  <span>O</span>
                  <span>d</span>
                  <span>e</span>
                  <span>y</span>
                </span>
                <span className="line-block">
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>k</span>
                  <span>p</span>
                  <span>a</span>
                </span>
              </h1>

              <div className="tags">
                <span className="tag-line"></span>
                <span className="tag-text">Photographer, Artist, Model</span>
              </div>

              <div className="big-hero-img">
                <img src="/assets/odey/1.jpg" alt="Odey Ikpa and his art" />
              </div>

              <p className="first-text">
                Odey Ikpa who hails from Cross River, Nigeria is a photographer
                and visual storyteller. He uses documentary and lifestyle
                portrait photography to evoke strong emotions and the feeling of
                nostalgia.
              </p>

              <div className="small-hero-img">
                <img src="/assets/odey/2.jpg" alt="Head shot of Odey Ikpa" />
                <div className="overlay"></div>
              </div>

              <p className="second-text">
                With his artistic practice, he primarily focuses on what feels
                familiar to himself and his subjects — exploring themes centered
                around blackness, community and repressed emotions.
              </p>

              <div className="link">
                <Link to="/projects">View Projects</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Home.propTypes = {
  loader: PropTypes.bool,
  setLoader: PropTypes.func,
};

export default Home;
