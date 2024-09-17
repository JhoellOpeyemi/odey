import gsap from "gsap";

export const reveal = (tl, texts) => {
  tl.current = gsap
    .timeline({ delay: 0.2 })
    .from("nav", {
      opacity: 0,
      duration: 0.3,
    })
    .to(
      ".big-hero-img",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.15"
    )
    .from(
      ".big-hero-img img",
      {
        scale: 1.8,
        duration: 0.6,
      },
      "-=0.6"
    )
    .to(
      ".first-text, .second-text",
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.3"
    )
    .to(
      ".small-hero-img",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.5"
    )
    .to(
      texts,
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.02,
      },
      "-=0.5"
    )
    .to(
      ".tags",
      {
        opacity: 1,
        duration: 0.5,
      },
      "-=0.25"
    );
};

export const mobileReveal = (tl, texts) => {
  tl.current = gsap
    .timeline({ delay: 0.2 })
    .to(".big-hero-img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
    })
    .from(
      ".big-hero-img img",
      {
        scale: 1.8,
        duration: 0.6,
      },
      "-=0.6"
    )
    .to(
      texts,
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.02,
      },
      "-=0.5"
    )
    .to(
      ".tags",
      {
        opacity: 1,
        duration: 0.5,
      },
      "-=0.25"
    );
};

export const scrollReveal = (tl) => {
  tl.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".first-text",
        start: "clamp(top 80%)",
        end: "clamp(top 10%)",
        scrub: 1,
      },
    })
    .to(".first-text", {
      opacity: 1,
    })
    .to(".small-hero-img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
    })
    .to(".second-text", {
      opacity: 1,
    });
};
