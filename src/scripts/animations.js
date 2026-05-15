import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animación del título principal
const heroTitle = document.querySelector("[data-hero-title]");

if (heroTitle) {
  gsap.from(heroTitle, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
}

// Animación general al hacer scroll
const revealElements = document.querySelectorAll("[data-scroll-reveal]");

revealElements.forEach((element) => {
  gsap.fromTo(
    element,
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    }
  );
});

// Animación de imágenes
const imageElements = document.querySelectorAll("[data-scroll-image]");

imageElements.forEach((image) => {
  gsap.fromTo(
    image,
    {
      scale: 1.08,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: image,
        start: "top 85%",
        once: true,
      },
    }
  );
});