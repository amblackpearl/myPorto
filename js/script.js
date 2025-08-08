// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden') ? 
        '<i class="fas fa-bars text-2xl"></i>' : 
        '<i class="fas fa-times text-2xl"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form Submission Animation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner animate-spin mr-2"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
            submitBtn.classList.remove('bg-white', 'hover:bg-gray-100');
            submitBtn.classList.add('bg-green-500', 'hover:bg-green-600', 'text-white');
            
            // Reset form after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                submitBtn.classList.remove('bg-green-500', 'hover:bg-green-600', 'text-white');
                submitBtn.classList.add('bg-white', 'hover:bg-gray-100');
            }, 3000);
        }, 2000);
    });
}

// Load More Projects Animation
const loadMoreBtn = document.getElementById('load-more');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        const spinner = this.querySelector('.fa-spinner');
        const originalContent = this.innerHTML;
        
        spinner.classList.remove('hidden');
        this.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
            spinner.classList.add('hidden');
            this.disabled = false;
            this.innerHTML = '<span>No More Projects</span><i class="fas fa-check ml-2"></i>';
            this.classList.remove('bg-primary', 'hover:bg-secondary');
            this.classList.add('bg-gray-400', 'cursor-not-allowed');
        }, 1500);
    });
}

// Initialize Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.typed-text')) {
        const typed = new Typed('.typed-text', {
            strings: [
                'Electronics Engineer',
                'Embedded Systems Developer',
                'IoT Specialist',
                'PLC Programmer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html'
        });
    }
});

// Parallax effect for background elements
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.bg-dot').forEach((dot, index) => {
        const speed = 0.05 + (index * 0.01);
        const xPos = -(x * speed * 100);
        const yPos = -(y * speed * 100);
        dot.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});