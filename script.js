// Select the flap and letter elements
const flap = document.querySelector('.flap');
const letter = document.querySelector('.letter');

// Add event listener for click events on the flap
flap.addEventListener('click', () => {
    // Check if the letter is currently shown
    const isOpen = letter.classList.contains('show');

    if (isOpen) {
        // If the letter is open, close it
        flap.classList.remove('open');
        letter.classList.remove('show');
    } else {
        // If the letter is closed, open it
        flap.classList.add('open');
        letter.classList.add('show');
    }
});
