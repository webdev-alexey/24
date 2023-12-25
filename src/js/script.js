window.addEventListener("DOMContentLoaded", () => {
  animate();
});

function animate() {
  gsap.registerPlugin(ScrollTrigger);

  // Секция 1
  gsap.set(".about__bg", {
    yPercent: 20,
  });

  gsap.set(".about__wrap", {
    yPercent: 200,
  });

  const tlPromo = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top top",
      end: "bottom+=100%",
      scrub: 1,
      pin: true,
    },
  });

  tlPromo
    .to(".about__bg", {
      yPercent: 0,
    })
    .to(
      ".about__inner",
      {
        width: "100%",
        height: "100%",
      },
      "<",
    )
    .to(
      ".about__decor",
      {
        opacity: 0,
      },
      "<",
    )
    .to(
      ".about__wrap",
      {
        yPercent: 0,
      },
      "<",
    );
}
