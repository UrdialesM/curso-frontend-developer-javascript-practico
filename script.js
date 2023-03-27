const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.burger-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAsideMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleAsideMenu () {
    aside.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}