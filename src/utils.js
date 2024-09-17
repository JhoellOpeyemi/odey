import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const horizontalScroll = (wrapper) => {
  const getScrollAmount = () => {
    const wrapperWidth = wrapper.current.offsetWidth;
    return -(wrapperWidth - window.innerWidth);
  };

  const tween = gsap.to(wrapper.current, {
    x: getScrollAmount,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: wrapper.current,
    start: "top top",
    end: () => `+${getScrollAmount() * -1.5}`,
    pin: true,
    pinSpacing: true,
    animation: tween,
    duration: 3,
    scrub: 2,
    invalidateOnRefresh: true,
  });
};

export const sectionScroll = (wrapper, pin) => {
  const getScrollAmount = () => {
    const wrapperWidth = wrapper.current.offsetWidth;
    return -(wrapperWidth - window.innerWidth);
  };

  const tween = gsap.to(wrapper.current, {
    x: getScrollAmount,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: wrapper.current,
    start: "clamp(left right)",
    end: () => `+${getScrollAmount() * -1.5}`,
    pin: pin.current,
    pinSpacing: true,
    animation: tween,
    duration: 3,
    scrub: 2,
    invalidateOnRefresh: true,
  });
};
