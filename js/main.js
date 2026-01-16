/* 
========================================
   Main JavaScript (Polished)
========================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // Elements
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('backToTop');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    /* 
    ------------------------------
    Sticky Navbar Logic
    ------------------------------
    */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTopBtn.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTopBtn.classList.remove('visible');
        }
    });

    /* 
    ------------------------------
    Back to Top
    ------------------------------
    */
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* 
    ------------------------------
    Mobile Nav
    ------------------------------
    */
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isActive = navLinks.style.display === 'flex';

            if (!isActive) {
                navLinks.style.display = 'flex';
                // Mobile styles applied via JS for toggle simplicity
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#fff';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

    /* 
    ------------------------------
    Scroll Reveal Animation
    ------------------------------
    */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Target elements to animate
    const animatableElements = document.querySelectorAll('.project-card, .stat-card, .skill-pill, .testimonial-card, .section-title, .lead');

    animatableElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        // Optional: staggered delay based on index could be added here, 
        // but simple reveal is often cleaner.
        observer.observe(el);
    });

});
