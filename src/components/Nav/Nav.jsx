import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";

import "./nav.css";

gsap.registerPlugin(useGSAP);
const Nav = () => {
  const [nav, setNav] = useState(false);
  const container = useRef();
  const tl = useRef();

  const linkData = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/projects",
      label: "Projects",
    },
    {
      path: "/archive",
      label: "Archive",
    },
    {
      path: "/polaroids",
      label: "Polaroids",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (window.innerWidth < 560) {
      gsap.set(".nav-link", { y: "100%", opacity: 0 });
    }

    tl.current = gsap.timeline().reverse();

    tl.current

      .to(".nav-links-container", {
        yPercent: 100,
        duration: 1,
        ease: "power4.inOut",
      })
      .to(
        ".nav-link",
        {
          y: "0%",
          opacity: 1,
          duration: 0.75,
          ease: "power4.inOut",
          stagger: 0.06,
        },
        "-=0.4"
      );
  }, []);

  useEffect(() => {
    tl.current.reversed(!nav);
  }, [nav]);

  return (
    <nav ref={container}>
      <div className="nav-links-container">
        {linkData.map((link, index) => {
          return (
            <div className="link-wrapper" key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setNav(false)}
              >
                {link.label}
              </NavLink>
            </div>
          );
        })}
      </div>

      <button className="menu" onClick={handleNav}>
        {nav ? "Close" : "Menu"}
      </button>
    </nav>
  );
};

export default Nav;
