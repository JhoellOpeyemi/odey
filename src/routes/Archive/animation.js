import gsap from "gsap";

export const reveal = (tl) => {
  tl.current = gsap
    .timeline({ delay: 0.2 })
    .from("nav", {
      opacity: 0,
      duration: 0.3,
    })
    .from(".page-header", { opacity: 0, duration: 0.5 }, "-=0.1")
    .to(".documentary .image-wrapper", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      stagger: 0.125,
      ease: "power4.inOut",
    })
    .from(
      ".documentary .title",
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .from(
      ".documentary .desc",
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.7"
    );
};
