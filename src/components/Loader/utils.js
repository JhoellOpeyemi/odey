import gsap from "gsap";

export const data = [
  "/assets/loader/dancing1.webp",
  "/assets/loader/ebitimi4.webp",
  "/assets/loader/father-land.jpg",
  "/assets/loader/odey.jpg",
  "/assets/loader/shakkana.webp",
  "/assets/loader/shelosh.jpg",
  "/assets/loader/tbs-onikan-lagos.jpg",
  "/assets/loader/the-two-fishermen.jpg",
  "/assets/loader/this-is-us-x-waf.webp",
  "/assets/loader/unknown.jpg",
  "/assets/loader/untitled2.webp",
];

export const animation = (
  tl,
  loaderImages,
  container,
  images,
  width,
  setLoader
) => {
  tl.current = gsap
    .timeline({ delay: 0.5 })
    .to(".loader-text", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".loader-text", {
      opacity: 0,
      duration: 0.5,
      delay: 1,
    })
    .to(images, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.5,
      stagger: 0.05,
    })
    .to(
      loaderImages.current,
      {
        x: -width,
        duration: 1.75,
        ease: "power4.inOut",
      },
      "-=0.2"
    )
    .to(images, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.5,
      stagger: 0.06,
    })
    .to(
      ".mask",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "expo.inOut",
      },
      "-=0.2"
    )
    .to(
      container.current,
      {
        opacity: 0,
        onUpdate: () => setLoader(false),
      },
      "-=0.1"
    );
};
