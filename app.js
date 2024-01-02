// parallax scrolling

const box1 = document.getElementById('box-1');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');

window.addEventListener('scroll', function() {
    let offset = window.scrollY;

    box1.style.backgroundPositionY = (offset * 0.4) -560 + "px";
    box4.style.backgroundPositionY = (offset * 0.5) -280 + "px";
    box5.style.backgroundPositionY = (offset * 0.5) -500 + "px";

})

// elements fade in on scroll

const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in");

if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in");
      } else {
        element.classList.remove("fade-in");
      }
    });
  });
}

// header slideshow

let current = 0,
    slides = document.getElementsByClassName("slide");

function fade() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}

setInterval(fade, 4000);
