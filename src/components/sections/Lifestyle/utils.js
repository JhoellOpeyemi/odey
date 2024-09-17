import gsap from "gsap";

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
  const imageWrapper = e.target.querySelector(".lifestyle-image-wrapper");

  hoverTimeline(imageWrapper, "hover");
};

// runs when mouse leaves a polaroid
export const handleLeave = (e) => {
  const imageWrapper = e.target.querySelector(".lifestyle-image-wrapper");

  hoverTimeline(imageWrapper, "leave");
};
