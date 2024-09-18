import gsap from "gsap";

export const data = [
  "/assets/archive/lifestyle/shippy.png",
  "/assets/archive/lifestyle/chemicals.png",
  "/assets/archive/lifestyle/donpapi.png",
  "/assets/archive/lifestyle/57.png",
  "/assets/archive/lifestyle/shakkana.png",
  "/assets/archive/lifestyle/benjiflow.png",
];

// functions
// the timeline for the mouse animation
export const hoverTimeline = (imageWrapper, state) => {
  if (state == "hover") {
    gsap.to(imageWrapper, {
      width: "12.75rem",
      //   height: "17rem",
      duration: 0.6,
      ease: "power1",
      delay: 0.1,
    });
  }

  if (state == "leave") {
    gsap.to(imageWrapper, {
      width: "6rem",
      //   height: "14rem",
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
