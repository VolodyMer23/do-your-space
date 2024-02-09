const gBtn = document.querySelectorAll(".gallery-btn");
const modalsOverlay = document.querySelector(".modals-overlay");
const modals = document.querySelectorAll(".modal");
console.log(gBtn);
gBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    const path = e.currentTarget.getAttribute("data-path");
    document
      .querySelector(`[data-target=${path}]`)
      .classList.add("modal--visible");
    modalsOverlay.classList.add("modals-overlay--visible");
    document.body.classList.add('body-scroll');
    lightGallery(document.getElementById(`${path}-gallery`), {
      controls: true,
      counter: false,
      download: false,
      thumbnail: true,
      escKey: true,
      height: '100%',
    });
  });
});

modalsOverlay.addEventListener("click", (e) => {
  modals.forEach((el) => {
    el.classList.remove("modal--visible");
  });
  modalsOverlay.classList.remove("modals-overlay--visible");
  document.body.classList.remove("body-scroll");
});

console.log("loaded");
