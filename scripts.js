document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        // Simulate form submission
        console.log('Form submitted with the following data:');
        formData.forEach((value, key) => {
            console.log(key + ': ' + value);
        });

        // Clear the form after submission
        contactForm.reset();

        // Show a confirmation message (you can customize this part)
        alert('Thank you for your message! We will get back to you shortly.');
    });
});
