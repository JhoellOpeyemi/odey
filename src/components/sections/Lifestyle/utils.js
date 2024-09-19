import gsap from "gsap";

export const data = [
  "/assets/archive/lifestyle/shippy.jpg",
  "/assets/archive/lifestyle/chemical.webp",
  "/assets/archive/lifestyle/donpapi.jpg",
  "/assets/archive/lifestyle/57.webp",
  "/assets/archive/lifestyle/shakkana.jpg",
  "/assets/archive/lifestyle/benjiflow.jpg",
];

// functions
// the timeline for the mouse animation
export const hoverTimeline = (imageWrapper, state) => {
  if (state == "hover") {
    gsap.to(imageWrapper, {
      width: "15rem",
      duration: 0.6,
      ease: "power1",
      delay: 0.1,
    });
  }

  if (state == "leave") {
    gsap.to(imageWrapper, {
      width: "8rem",
      duration: 0.6,
      ease: "power1",
    });
  }
};

// runs when mouse hovers a polaroid
export const handleHover = (e) => {
  if (window.innerWidth > 768) {
    const imageWrapper = e.target.querySelector(".lifestyle-image-wrapper");

    hoverTimeline(imageWrapper, "hover");
  }
};

// runs when mouse leaves a polaroid
export const handleLeave = (e) => {
  if (window.innerWidth > 768) {
    const imageWrapper = e.target.querySelector(".lifestyle-image-wrapper");

    hoverTimeline(imageWrapper, "leave");
  }
};
