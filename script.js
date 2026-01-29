// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Section switching logic
const navItems = document.querySelectorAll('.nav-links a');
const heroes = document.querySelectorAll('.hero');
const headerBG = document.querySelector('.site-header');

navItems.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = link.getAttribute('href').replace('#', '');

        // Close mobile menu
        navMenu.classList.remove('open');

        // Hide all hero sections
        heroes.forEach(sec => sec.style.display = 'none');

        // Change the background
        headerBG.style.backgroundImage = `url("Top-view-${target}.jpg")`;

        // Show the selected section
        const panel = document.querySelector(`#${target}`);
        if (panel) panel.style.display = 'block';
    });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
