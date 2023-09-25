// const popupButton = document.querySelector(".promo-button");
// const popupContainer = document.querySelector(".popupcontainer");
// const popup = document.querySelector(".popup");
// const closeButton = document.querySelector(".closebutton");

// popupButton.addEventListener('click', function() {
//     popupContainer.style.display = 'flex';
//     popup.style.display = 'block';
// });

// closeButton.addEventListener('click', function() {
//     popupContainer.style.display = 'none';
//     popup.style.display = 'none';
// });

const promoButtons = document.querySelectorAll('.promo-button');

promoButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    alert('Promo Successfully Claimed!');
  });
});

const promoButtons2 = document.querySelectorAll('.promo-button2');

promoButtons2.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    alert('Promo cannot be claimed yet!');
  });
});
