const purchaseButton = document.querySelector('.href-purchase');


purchaseButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link


  alert('The ticket cannot be purchased yet!');
  window.location.href = 'tickets-upcoming.html';
});
