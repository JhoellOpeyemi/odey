import gsap from "gsap";

export const reveal = (tl) => {
  tl.current = gsap
    .timeline({ delay: 0.2 })
    .from("nav", {
      opacity: 0,
      duration: 0.3,
    })
    .from(".page-header", { opacity: 0, duration: 0.5 }, "-=0.1")
    .to(
      ".ebitimi-image-1, .ebitimi-image-2, .ebitimi-image-3",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        stagger: 0.125,
        ease: "power4.inOut",
      },
      "-=0.25"
    )
    .from(
      ".ebitimi-text",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    )
    .from(
      ".ebitimi-text .title",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.45"
    );
};

export const mobileReveal = (tl) => {
  tl.current = gsap
    .timeline({ delay: 0.2 })
    .from("nav", {
      opacity: 0,
      duration: 0.3,
    })
    .from(".page-header", { opacity: 0, duration: 0.5 }, "-=0.1")
    .to(
      ".ebitimi-image-1, .ebitimi-image-3, .ebitimi-image-2",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        stagger: 0.15,
        ease: "power4.inOut",
      },
      "-=0.25"
    )
    .from(
      ".ebitimi-text",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    )
    .from(
      ".ebitimi-text .title",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.45"
    );
};
