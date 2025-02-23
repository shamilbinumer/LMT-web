window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-content');
    
    parallax.style.backgroundPositionY = `${scrolled * 0.7}px`;
});
// Custom cursor script
const customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', function (e) {
    requestAnimationFrame(function () {
        customCursor.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });
});
//Mobile navbar animation
document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElement = document.getElementById('menu_ofcanvas');
    var navItems = document.querySelectorAll('.nav-item');
    var priceCalculatorBtn = document.querySelector('.price-calculator-btn');

    offcanvasElement.addEventListener('show.bs.offcanvas', function () {
        navItems.forEach(function (item) {
            item.classList.add('animated');
        });
        priceCalculatorBtn.classList.add('animated');
    });

    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
        navItems.forEach(function (item) {
            item.classList.remove('animated');
        });
        priceCalculatorBtn.classList.remove('animated');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuCloseBtn = document.querySelector('.menu-close-btn');
    const menuBarWrapper = document.querySelector('.menu-bar-wrapper');

    // Open menu bar
    menuToggle.addEventListener('click', function () {
        menuBarWrapper.classList.add('menu-bar-wrapper-active');
    });

    // Close menu bar
    menuCloseBtn.addEventListener('click', function () {
        menuBarWrapper.classList.remove('menu-bar-wrapper-active');
    });
});
  //scroll
  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let parallaxSpeed = 0.2; 
    document.querySelector('.hero-content').style.transform = `translateY(-${scrollPosition * parallaxSpeed}px)`;
});
