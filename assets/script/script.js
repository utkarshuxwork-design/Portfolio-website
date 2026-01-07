
// navbar
const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// SCROLL EFFECT
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// MOBILE MENU TOGGLE
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Optional: Simple animation for hamburger
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(span => span.style.backgroundColor = navLinks.classList.contains('active') ? '#2563eb' : '#1f2937');
});

