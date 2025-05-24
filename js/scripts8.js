// scripts8.js

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function (adapted for Tailwind)
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        const navbarShrink = function () {
            if (window.scrollY === 0) {
                mainNav.classList.remove('navbar-shrink', 'bg-white/80', 'shadow-md');
                mainNav.classList.add('bg-transparent', 'shadow-none'); // Or your initial transparent state
            } else {
                mainNav.classList.add('navbar-shrink', 'bg-white/80', 'shadow-md');
                mainNav.classList.remove('bg-transparent', 'shadow-none');
            }
        };
        // Initial call
        // navbarShrink(); // Call this if you want different initial state when at top
        // Add scroll listener
        // document.addEventListener('scroll', navbarShrink); // Uncomment if you want shrink on scroll effect

        // For this design, the navbar is always semi-transparent white with shadow.
        // If you want it to be fully transparent at the top and opaque on scroll,
        // you'd uncomment the above and adjust initial Tailwind classes on the nav element.
    }


    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu'); // Desktop menu

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculate offset for fixed navbar
                    const navbarHeight = mainNav ? mainNav.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        navToggle.querySelector('i').classList.remove('fa-times');
                        navToggle.querySelector('i').classList.add('fa-bars');
                    }
                }
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show button after scrolling 300px
                backToTopBtn.classList.remove('opacity-0');
                backToTopBtn.classList.add('opacity-100');
            } else {
                backToTopBtn.classList.remove('opacity-100');
                backToTopBtn.classList.add('opacity-0');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Simple Lightbox (if you choose to use it or a similar library)
    // This example uses a placeholder. You'd need to include the library
    // and initialize it according to its documentation.
    // For example, if using a library like GLightbox:
    // const lightbox = GLightbox({ selector: '.portfolio-lightbox' });
    // Or if using SimpleLightbox (as in original, but might need adaptation for Tailwind structure):
    // new SimpleLightbox({ elements: '.portfolio-item-custom a' }); // Adjust selector as needed

    // For now, clicking portfolio items scrolls to detail sections.
    // If you want a lightbox for images within detail sections:
    // Example: new SimpleLightbox({ elements: '.project-detail-section img' });
    // This would make all images in project detail sections open in a lightbox.
    // You might want more specific selectors (e.g., add a class like 'lightbox-image' to images).

    console.log("Redesigned scripts loaded.");
});
