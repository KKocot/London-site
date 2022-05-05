const sliders = document.querySelectorAll(".info_img");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  observeOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      console.log("123");
      return;
    } else {
      console.log("321");
      entry.target.classList.add("appear");
      observeOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
