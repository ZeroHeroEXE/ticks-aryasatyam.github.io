$(document).ready(function(){
    $('.carousel-pic:first-child').addClass('active');
    $('.dot:first-child').addClass('active');

    function switchSlides(){
        var currentSlide = $('.carousel-pic.active');
        var currentDot = $('.dot.active');

        var nextSlide = currentSlide.next('.carousel-pic').length ? currentSlide.next('.carousel-pic') : $('.carousel-pic:first-child');
        var nextDot = currentDot.next('.dot').length ? currentDot.next('.dot') : $('.dot:first-child');

        currentSlide.fadeOut(500).removeClass('active');
        currentDot.removeClass('active');

        nextSlide.fadeIn(500).addClass('active');
        nextDot.addClass('active');

    }
    var interval = setInterval(switchSlides, 2000);
});