// // Carousel
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("carousel-pic");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// Carousel with jQuery
$(document).ready(function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      let slides = $(".carousel-pic");
      let dots = $(".dot");
      if (n > slides.length) {slideIndex = 1;}
      if (n < 1) {slideIndex = slides.length;}
      slides.hide();
      dots.removeClass("active");
      slides.eq(slideIndex-1).show();
      dots.eq(slideIndex-1).addClass("active");
  }

  $("#prevButton").click(function() {
      plusSlides(-1);
  });

  $("#nextButton").click(function() {
      plusSlides(1);
  });
});