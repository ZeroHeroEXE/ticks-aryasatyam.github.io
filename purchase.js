const purchaseButton = document.querySelector('.href-purchase');


purchaseButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link


  alert('Purchase Successful!');
  window.location.href = 'tickets-upcoming.html';
});
