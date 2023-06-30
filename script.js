const briffingssLink = document.getElementById('briffingss');
const briffingssDiv = document.getElementById('briffingss');

briffingssLink.addEventListener('click', function(event) {
  event.preventDefault();
  briffingssDiv.style.display = 'block'; // Show the corresponding div
});

