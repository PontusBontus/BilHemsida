$(document).ready(function() {
    let currentSlide = 0; // Håller reda på aktuell bild
    const totalSlides = $('.slide').length; // Antal bilder i slidern

    function updateSlide() {
        // Uppdaterar sliderns position utefter den bild som visas
        $('.slider').css('transform', `translateX(-${currentSlide * (100/totalSlides)}%)`);
        // Uppdaterar currentSlide för att visa vilken bild som visas
        $('.indicator').removeClass('active');
        $(`.indicator:eq(${currentSlide})`).addClass('active');
    }

    // Nästa bild-knapp
    $('.slider-arrow.next').click(function() {
        currentSlide = (currentSlide + 1) % totalSlides; // Går till nästa bild
        updateSlide();
    });

    // Föregående bild-knapp
    $('.slider-arrow.prev').click(function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Går till föregående bild
        updateSlide();
    });

    // Används för klicka på indikatorn längst ner för att gå till en specifik bild
    $('.indicator').click(function() {
        currentSlide = $(this).index();
        updateSlide();
    });

    // Används för att växla bild var 15:e sekund
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }, 15000);
});

document.addEventListener("DOMContentLoaded", function () {
    const promoSections = document.querySelectorAll(".promo-section");

    // Funktion för att fadda in sektioner när de syns på skärmen
    function fadeInOnScroll() {
        promoSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            // Om sektionen är inom skärmen, lägg till klassen "show"
            if (sectionPosition < screenPosition) {
                section.classList.add("show");
            }
        });
    }

    // Lyssna på scroll-event för att fadda in sektioner
    window.addEventListener("scroll", fadeInOnScroll);
});