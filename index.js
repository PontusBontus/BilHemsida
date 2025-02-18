$(document).ready(function() {
    let currentSlide = 0;
    const totalSlides = $('.slide').length;

    function updateSlide() {
        $('.slider').css('transform', `translateX(-${currentSlide * (100/totalSlides)}%)`);
        $('.indicator').removeClass('active');
        $(`.indicator:eq(${currentSlide})`).addClass('active');
    }

    $('.slider-arrow.next').click(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    });

    $('.slider-arrow.prev').click(function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    $('.indicator').click(function() {
        currentSlide = $(this).index();
        updateSlide();
    });

    // Auto-advance slides
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }, 15000);
});

document.addEventListener("DOMContentLoaded", function () {
    const promoSections = document.querySelectorAll(".promo-section");

    function fadeInOnScroll() {
        promoSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
});