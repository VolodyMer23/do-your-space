lightGallery(document.getElementById(`procces-gallery`), {
  controls: true,
  counter: false,
  download: false,
  thumbnail: true,
  escKey: true,
  height: "100%",
});
const toggleBtn = document.querySelectorAll(".hideBtn");
const galleryLink = document.querySelectorAll(".gallery_item");

galleryLink.forEach((el) => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.getAttribute("data-path");
    const target = document.getElementById(`${path}`);
    const pos = target.offsetTop;

    window.scrollTo(0, pos - 80);
    console.log("target :>> ", target);
    console.log(target.offsetTop);
  })
})


function toggleHide(e) {
  console.log(e);
  console.log(e.target.dataset.type);
  const iconEl = document.querySelector(
    `.close-icon[data-type=${e.target.dataset.type}]`
  );
  console.log(iconEl);
  iconEl.classList.toggle("animate-close");
  if (e.target.dataset.type === "design") {
    const designListEl = document.querySelector("[data-design]");
    console.log(designListEl);
    designListEl.classList.toggle("hide");
  }
  if (e.target.dataset.type === "warranty") {
    const designListEl = document.querySelector("[data-warranty]");
    console.log(designListEl);
    designListEl.classList.toggle("hide");
  }
  if (e.target.dataset.type === "price") {
    const designListEl = document.querySelector("[data-price]");
    console.log(designListEl);
    designListEl.classList.toggle("hide");
  }
  if (e.target.dataset.type === "issues") {
    const designListEl = document.querySelector("[data-issues]");
    console.log(designListEl);
    designListEl.classList.toggle("hide");
  }
}

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", toggleHide);
});
