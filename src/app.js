//NAVBAR, SIDEBAR

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//PROJECT LINKS
const projectOne = document.querySelector(".project-one-container");
const projectTwo = document.querySelector(".project-two-container");
const projectThree = document.querySelector(".project-three-container");
const projectFour = document.querySelector(".project-four-container");
const projectFive = document.querySelector(".project-five-container");
const projectSix = document.querySelector(".project-six-container");
const projectSeven = document.querySelector(".project-seven-container");
const projectEight = document.querySelector(".project-eight-container");
const projectNine = document.querySelector(".project-nine-container");

projectOne.addEventListener("click", function () {
  window.open("https://warm-fudge-1fd750.netlify.app/", "_blank");
});
projectTwo.addEventListener("click", function () {
  window.open("https://frolicking-liger-2f6af1.netlify.app/", "_blank");
});
projectThree.addEventListener("click", function () {
  window.open("https://steady-kitsune-53dd78.netlify.app/", "_blank");
});
projectFour.addEventListener("click", function () {
  window.open("https://relaxed-crisp-dc0aaf.netlify.app/", "_blank");
});
projectFive.addEventListener("click", function () {
  window.open("https://scintillating-sawine-be3287.netlify.app/", "_blank");
});
projectSix.addEventListener("click", function () {
  window.open("https://dynamic-tarsier-db5f0a.netlify.app/", "_blank");
});
projectSeven.addEventListener("click", function () {
  window.open("https://preeminent-gumdrop-b73ad5.netlify.app/", "_blank");
});
projectEight.addEventListener("click", function () {
  window.open("https://harmonious-praline-92c692.netlify.app/", "_blank");
});
projectNine.addEventListener("click", function () {
  window.open("https://wondrous-biscuit-665345.netlify.app/", "_blank");
});
