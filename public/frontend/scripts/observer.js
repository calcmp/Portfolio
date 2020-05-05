const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const faderOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -20px 0px",
};

const sliderOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -20px 0px",
};

const fadeOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      fadeOnScroll.unobserve(entry.target);
    }
  });
}, faderOptions);

const slideOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      slideOnScroll.unobserve(entry.target);
    }
  });
}, sliderOptions);

faders.forEach((fader) => {
  fadeOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  slideOnScroll.observe(slider);
});
