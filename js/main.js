document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Mobile menu toggled'); // Debug log
        });
    }
    
    // Menu Tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuContents = document.querySelectorAll('.menu-content');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            menuTabs.forEach(t => t.classList.remove('active'));
            menuContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Testimonial Slider
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showSlide(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current testimonial and activate dot
        if (testimonials[index]) {
            testimonials[index].style.display = 'block';
        }
        
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    // Initialize slider
    if (testimonials.length > 0) {
        showSlide(currentSlide);
        
        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only if the link points to an ID on the same page
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navToggle.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                    
                    // Scroll to the element
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    navLinks.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Highlight active nav item on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Add shadow to header on scroll
        const header = document.querySelector('header');
        if (scrollPosition > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        // Update active nav item
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
}); 