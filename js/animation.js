gsap.registerPlugin(ScrollTrigger);

// Apple-style Zoom Logic
gsap.to("#zoom-img", {
    scale: 2.5,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-scroll",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
    }
});
