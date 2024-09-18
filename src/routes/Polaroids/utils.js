import gsap from "gsap";

export const data = [
  {
    img: "/assets/polaroids/ireti.webp",
    name: "Ireti",
  },
  {
    img: "/assets/polaroids/ola.webp",
    name: "Ola",
  },
  {
    img: "/assets/polaroids/lancey.webp",
    name: "Lancey",
  },
  {
    img: "/assets/polaroids/korty.webp",
    name: "Korty EO",
  },
  {
    img: "/assets/polaroids/slawn.webp",
    name: "Slawn",
  },
  {
    img: "/assets/polaroids/tiwa.webp",
    name: "Tiwa Savage",
  },
  {
    img: "/assets/polaroids/zamir.webp",
    name: "Zamir",
  },
  {
    img: "/assets/polaroids/prettyboy.webp",
    name: "Prettyboy DO",
  },
  {
    img: "/assets/polaroids/mowalola.webp",
    name: "Mowalola",
  },
  {
    img: "/assets/polaroids/silk-syd.webp",
    name: "Silk Syd",
  },
  {
    img: "/assets/polaroids/emilia.jpg",
    name: "Emilia",
  },
  {
    img: "/assets/polaroids/tamia.webp",
    name: "Tamia",
  },
  {
    img: "/assets/polaroids/tochi.jpg",
    name: "Tochi",
  },
  {
    img: "/assets/polaroids/made-kuti.jpg",
    name: "Made Kuti",
  },
  {
    img: "/assets/polaroids/dedejae.jpg",
    name: "Dedejae",
  },
  {
    img: "/assets/polaroids/natse.jpg",
    name: "Natse",
  },
  {
    img: "/assets/polaroids/chuchu.jpg",
    name: "ChuChu",
  },
  {
    img: "/assets/polaroids/blessing.webp",
    name: "Blessing",
  },
];

export const reveal = (tl, images) => {
  tl.current = gsap
    .timeline({ delay: 0.1 })
    .from("nav", {
      opacity: 0,
      duration: 0.3,
    })
    .from(".page-header", { opacity: 0, duration: 0.5 }, "-=0.1")
    .to(
      images,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
        stagger: 0.04,
      },
      "-=0.3"
    );
};

export const mobileReveal = (tl) => {
  tl.current = gsap
    .timeline({ delay: 0.1 })
    .from("nav", {
      opacity: 0,
      duration: 0.3,
    })
    .from(".page-header", { opacity: 0, duration: 0.5 }, "-=0.1")
    .from(".polaroids-prompt", { opacity: 0, duration: 0.5 }, "-=0.1");
};

export const polaroidsReveal = (elements) => {
  elements.forEach((ele) => {
    gsap.to(ele, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.5,
      scrollTrigger: {
        trigger: ele,
        start: "clamp(top 70%)",
        end: "clamp(top 37%)",
        scrub: 1.5,
      },
    });
  });
};

// functions
// the timeline for the mouse animation
export const hoverTimeline = (imageWrapper, name, state) => {
  const tl = gsap.timeline();

  if (state == "hover") {
    tl.to(imageWrapper, {
      width: "13.5rem",
      height: "20rem",
      filter: "grayscale(0%)",
      duration: 0.6,
      ease: "back",
      delay: 0.1,
    }).to(
      name,
      {
        opacity: 1,
        y: 0,
      },
      "<"
    );
  }

  if (state == "leave") {
    tl.to(name, {
      opacity: 0,
      y: 10,
    }).to(
      imageWrapper,
      {
        width: "7.5rem",
        height: "15rem",
        filter: "grayscale(100%)",
        duration: 0.6,
        ease: "back",
      },
      "-=0.3"
    );
  }
};

// runs when mouse hovers a polaroid
export const handleHover = (e) => {
  if (window.innerWidth > 768) {
    const imageWrapper = e.target.querySelector(".img-wrapper");
    const name = e.target.querySelector("p");

    hoverTimeline(imageWrapper, name, "hover");
  }
};

// runs when mouse leaves a polaroid
export const handleLeave = (e) => {
  if (window.innerWidth > 768) {
    const imageWrapper = e.target.querySelector(".img-wrapper");
    const name = e.target.querySelector("p");

    hoverTimeline(imageWrapper, name, "leave");
  }
};
