//Navbar Fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');  
    }
};

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Select all links with class 'nav-link'
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1); // Get the ID without '#'
    const targetElement = document.getElementById(targetId);

    // Scroll to the target element
    targetElement.scrollIntoView({
      behavior: 'smooth' // Smooth scroll effect
    });
  });
});