import gsap from "gsap";

export const loaderAnimation = (tl, container, setFunction) => {
  tl.current = gsap
    .timeline({ delay: 0.15 })
    .to(".page-background", {
      yPercent: 100,
      duration: 1,
      ease: "expo.inOut",
    })
    .to(".page-text", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".page-text", {
      opacity: 0,
      duration: 0.5,
      delay: 0.75,
    })
    .to(".page-loader-image", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.5,
    })
    .to(".page-loader-image", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.5,
      delay: 0.3,
    })
    .to(
      ".page-background",
      {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
      },
      "-=0.1"
    )
    .to(
      container.current,
      {
        opacity: 0,
        onUpdate: () => setFunction(false),
      },
      "-=0.1"
    );
};
