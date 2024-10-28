gsap.to(".selector1", { // selector text, Array, or object
  x: 25,
  duration: 3,
  delay: 1,
  yoyo: true,
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true,
  ease: "power2.inOut",
});

gsap.to(".selector2", { // selector text, Array, or object
  y: 22,
  duration: 3,
  delay: 1,
  yoyo: true,
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true,
  ease: "power2.inOut",
});

gsap.to(".selector3", { // selector text, Array, or object
  y: -22,
  duration: 3,
  delay: 1,
  yoyo: true,
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true,
  ease: "power2.inOut",
});

gsap.to(".selector4", { // selector text, Array, or object
  x: -25,
  duration: 3,
  delay: 1,
  yoyo: true,
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true,
  ease: "power2.inOut",
});


const images = document.querySelectorAll(".image"); // Selects all elements with class "image"

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    gsap.to(image, {
      scale: 1.2,
      duration: 0.3,
    });
  });

  image.addEventListener("mouseleave", () => {
    gsap.to(image, {
      scale: 1,
      duration: 0.3,
    });
  });
});