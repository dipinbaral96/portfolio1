$(document).ready(function() {
    // Mobile menu toggle
    $('.hamburger').click(function() {
        $('nav ul').toggleClass('active');
    });
    
    // Smooth scrolling for navigation links
    $('nav ul li a').click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            
            const hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
            
            // Close mobile menu after clicking
            $('nav ul').removeClass('active');
        }
    });
    
    // Sticky header on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
    // Form submission
    $('.contact-form').submit(function(e) {
        e.preventDefault();
        
        // Get form values
        const name = $(this).find('input[type="text"]').val();
        const email = $(this).find('input[type="email"]').val();
        const subject = $(this).find('input[type="text"]').eq(1).val();
        const message = $(this).find('textarea').val();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
        
        // Reset form
        $(this).trigger('reset');
    });
    
    // Animation on scroll
    $(window).scroll(function() {
        $('.timeline-item, .experience-item, .project-card').each(function() {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 100) {
                $(this).addClass('animated');
            }
        });
    });
});