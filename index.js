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