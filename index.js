const menuBtn = document.querySelector(".ham-bar");
menuBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("show");
});
let menuElement = document.querySelectorAll(".menuElement");
menuElement.forEach((element) => {
  element.addEventListener("click", (e) => {
    menuElement.forEach((elem) => {
      elem.classList.remove("active");
    });
    element.classList.add("active");
    document.querySelector(".menu").classList.toggle("show");
  });
});
