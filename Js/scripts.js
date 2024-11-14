function showMoreCards() {
  const showMoreButton = document.getElementById('showMoreButton');
  if (!showMoreButton) return; // Exit if the button doesn't exist on this page

  const hiddenCards = document.querySelectorAll('#cardContainer .hidden');
  showMoreButton.addEventListener('click', () => {
      hiddenCards.forEach(card => card.classList.remove('hidden'));
      showMoreButton.style.display = 'none';
  });
}

// Call the function
showMoreCards();