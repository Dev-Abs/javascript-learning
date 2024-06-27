const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);


function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}