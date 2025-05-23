/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0 && !navbarCollapsible.classList.contains('navbar-mobile-expanded')) { // Check if mobile menu is open
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%', // Adjusted for better accuracy with new design
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                // Add a class when mobile menu is open, remove when closed by toggler
                // Bootstrap's default behavior handles the collapse, so we just manage the shrink state
                if (navbarToggler.classList.contains('collapsed')) { // about to open
                     mainNav.classList.add('navbar-mobile-expanded');
                     mainNav.classList.add('navbar-shrink'); // Keep it shrunk when menu is open
                } else { // about to close
                     mainNav.classList.remove('navbar-mobile-expanded');
                     navbarShrink(); // Re-evaluate shrink based on scroll
                }
                navbarToggler.click(); // This will toggle the 'collapsed' class
            }
        });
    });
    
    // Ensure navbar shrinks if mobile menu is opened at top of page
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            if (!navbarToggler.classList.contains('collapsed')) { // Menu is open
                mainNav.classList.add('navbar-mobile-expanded');
                mainNav.classList.add('navbar-shrink');
            } else { // Menu is closed
                mainNav.classList.remove('navbar-mobile-expanded');
                navbarShrink(); // Re-evaluate based on scroll
            }
        });
    }


    // Activate SimpleLightbox plugin for portfolio items (if you have a specific gallery)
    // This was targeting #portfolio2 before, adjust if your main portfolio items should use it
    // For individual project galleries, you might initialize SimpleLightbox separately or use a common class
    // Example for a general portfolio gallery:
    // new SimpleLightbox({
    //    elements: '#portfolio a.portfolio-link' // If you want lightbox on main portfolio items
    // });

    // Example for project detail galleries (if you add a class like 'project-gallery-item' to links)
     new SimpleLightbox({
        elements: '.glightbox' // Assuming you use 'glightbox' class for images in project details
     });
    
    // Update copyright year
    const copyrightYearElement = document.getElementById('copyright-year');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = new Date().getFullYear();
    }

});

