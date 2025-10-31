const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

// show slide
function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
    dots[i].classList.toggle("active", i === n);
  });
  index = n;
}

// auto slide every 5s
function autoSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}
let slideInterval = setInterval(autoSlide, 5000);

// click on dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    clearInterval(slideInterval); // stop auto when clicked
    slideInterval = setInterval(autoSlide, 5000); // restart timer
  });
});

// init
showSlide(index);
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const menuIcon = menuToggle.querySelector("i");

 menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  // Toggle icon between menu and X
  if (nav.classList.contains("active")) {
    menuIcon.classList.remove("bx-menu");
     menuIcon.classList.add("bx-x");
    } else {
    menuIcon.classList.remove("bx-x");
     menuIcon.classList.add("bx-menu");
  }
});
// Close nav menu when a link is clicked (mobile)
const navLinks = document.querySelectorAll("#nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  });
});
