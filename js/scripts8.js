window.addEventListener('DOMContentLoaded', event => {
    const mainNav = document.getElementById('mainNav');
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    // const navMenu = document.getElementById('nav-menu'); // Desktop menu, not directly manipulated by this script for toggling

    // Navbar shrink function (optional, based on your design)
    // The original script comments suggest this might not be active for the current design.
    // If you want the navbar to change style on scroll, uncomment and adjust.
    if (mainNav) {
        const navbarShrink = function () {
            if (window.scrollY === 0) {
                // Classes to remove when at the top
                mainNav.classList.remove('navbar-shrink', 'bg-white/80', 'shadow-md');
                // Classes to add when at the top (e.g., more transparent)
                mainNav.classList.add('bg-transparent', 'shadow-none'); // Adjust if your initial state is different
            } else {
                // Classes to add when scrolled
                mainNav.classList.add('navbar-shrink', 'bg-white/80', 'shadow-md');
                // Classes to remove when scrolled
                mainNav.classList.remove('bg-transparent', 'shadow-none');
            }
        };
        // To activate shrink on scroll:
        // 1. Set initial classes on #mainNav in HTML for the "at top" state.
        // 2. Uncomment the next two lines:
        // navbarShrink(); // Call on load to set initial state based on scroll position
        // document.addEventListener('scroll', navbarShrink);
        // console.log("Navbar shrink behavior initialized (if uncommented).");
    }

    // Mobile navigation toggle
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); // Toggles the 'hidden' class from Tailwind/styles8.css

            // Toggle icon (Font Awesome)
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    // Menu is now hidden, show bars icon
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    // Menu is now visible, show times icon
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
            console.log("Mobile menu toggled. Is hidden:", mobileMenu.classList.contains('hidden'));
        });
    } else {
        console.error("Mobile navigation toggle button or menu not found. Check IDs 'nav-toggle' and 'mobile-menu'.");
    }

    // Smooth scrolling for all navigation links (desktop and mobile)
    const navLinks = document.querySelectorAll('.nav-link'); // Ensure your nav links have this class
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navbarHeight = mainNav ? mainNav.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight - 10; // Adjusted for a little extra space

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if it's open and a link is clicked
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        // Reset icon to 'bars'
                        const icon = navToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                } else {
                    console.warn(`Smooth scroll target element with ID '${targetId}' not found.`);
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

    console.log("scripts8.js loaded and initialized.");
});