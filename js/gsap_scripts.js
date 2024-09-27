gsap.registerPlugin(ScrollTrigger);

// You can use a ScrollTrigger in a tween or timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-logo a",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
    id: "scrub"
  } 
})
tl.from('.header-logo a', { scale: 3, y: -400, })
tl.to(".header-logo a", {duration:1, scale: 1, y: 0})
.to(".header-logo a", { scale: 1, y: 0})
