document.addEventListener('DOMContentLoaded', () => {const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');navLinks.forEach((link, index) => {link.addEventListener('click', () => { sections.forEach((section) => section.classList.remove('active'));document.querySelector(link.getAttribute('href')).classList.add('active');});
    });
});