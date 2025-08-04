// La Tania 2025 - Main JavaScript

// Countdown Timer
function updateCountdown() {
    const tripDate = new Date('2025-12-21T15:00:00');
    const now = new Date();
    const diff = tripDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        // Update main countdown
        const daysEl = document.querySelector('[data-days]');
        const hoursEl = document.querySelector('[data-hours]');
        const minutesEl = document.querySelector('[data-minutes]');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        
        // Update footer countdown
        const footerCountdown = document.getElementById('mini-countdown');
        if (footerCountdown) {
            footerCountdown.textContent = `${days} days until the slopes!`;
        }
    }
}

// Enhanced Parallax for Layered Mountains
function handleParallax() {
    const scrolled = window.pageYOffset;
    const layer1 = document.querySelector('.mountain-layer-1');
    const layer2 = document.querySelector('.mountain-layer-2');
    const layer3 = document.querySelector('.mountain-layer-3');
    
    if (layer1) layer1.style.transform = `translateY(${scrolled * 0.3}px)`;
    if (layer2) layer2.style.transform = `translateY(${scrolled * 0.5}px) translateX(-10%)`;
    if (layer3) layer3.style.transform = `translateY(${scrolled * 0.7}px) translateX(5%)`;
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// Fade in elements on scroll
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Parallax effect
    window.addEventListener('scroll', handleParallax);
    
    // Optional: Add snow effect toggle
    const snowToggle = document.querySelector('.snow-toggle');
    if (snowToggle) {
        snowToggle.addEventListener('click', () => {
            document.body.classList.toggle('snowing');
        });
    }
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(250, 250, 250, 0.98);
            flex-direction: column;
            padding: var(--space-md);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .nav-links.active {
            display: flex;
        }
        
        .mobile-menu-toggle {
            display: block;
        }
    }
    
    @media (min-width: 769px) {
        .mobile-menu-toggle {
            display: none;
        }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);