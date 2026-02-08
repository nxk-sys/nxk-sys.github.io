document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Reveal Animations on Scroll ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // Optional: Unobserve if you only want it to happen once
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 2. Navbar Glass Effect ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(5, 5, 7, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.background = "rgba(19, 19, 31, 0.7)";
            navbar.style.boxShadow = "none";
            navbar.style.padding = "20px 0";
        }
    });

    // --- 3. Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // --- 4. Mouse Parallax / Glow Effect ---
    // Makes the background glow follow the mouse slightly or move
    const bgGlow = document.querySelector('.bg-glow');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Move the glow background slightly opposite to mouse
        bgGlow.style.transform = `translate(-${x * 50}px, -${y * 50}px) scale(1.1)`;
    });

    // --- 5. Terminal Typing Effect Loop ---
    // Simple logic to blink the cursor is in CSS, this could add dynamic text typing later

});


    // --- 6. Lightbox for Certificates ---
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close-modal')[0];

    // Get all certificate images
    const certImages = document.querySelectorAll('.cert-image-wrapper');

    certImages.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const img = wrapper.querySelector('img');
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
            navbar.style.display = 'none'; // Hide navbar for better view
        });
    });

    // Close function
    const closeModal = () => {
        modal.style.display = 'none';
        navbar.style.display = 'block'; // Show navbar back
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

