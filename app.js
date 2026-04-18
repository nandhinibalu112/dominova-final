/* ============================================================
   app.js — Dominova Precision Light Mode Fix
   ============================================================ */

const navbar      = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');

// Scroll handler
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    
    revealOnScroll();
});

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu logic
const mobileBtn   = document.getElementById('mobile-menu-btn');
const mobileMenu  = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileClose = document.getElementById('mobile-close-btn');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

const closeMenu = () => {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

if (mobileClose) {
    mobileClose.addEventListener('click', closeMenu);
}
if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
}
document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));

// Theme toggle functionality
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  console.log("clicked"); // DEBUG

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


// Scroll Reveal
const revealEls = document.querySelectorAll('.revealing');
function revealOnScroll() {
    const trigger = window.innerHeight * 0.92;
    revealEls.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add('active');
        }
    });
}

// Initial reveal
window.addEventListener('load', revealOnScroll);
revealOnScroll();

// Typing Effect logic
const texts = [
  "Grow Your Career",
  "Join Dominova Community",
  "Become Campus Ambassador",
  "Lead Your Campus",
  "Build Real Skills"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const changingText = document.getElementById("changing-text");
  if (!changingText) return;

  let fullText = texts[index];

  if (isDeleting) {
    charIndex--;
    currentText = fullText.substring(0, charIndex);
  } else {
    charIndex++;
    currentText = fullText.substring(0, charIndex);
  }

  changingText.textContent = currentText;

  // Premium speed (120ms typing / 60ms deleting)
  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === fullText.length) {
    speed = 1500; // Longer pause at the end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', typeEffect);
