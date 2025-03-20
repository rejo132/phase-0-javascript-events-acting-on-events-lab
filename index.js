// index.js

// Get the dodger element
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    // Get the current left position (removing 'px' and converting to number)
    const left = parseInt(dodger.style.left) || 0;
    // Move left by 10 pixels, ensuring it doesn't go below 0
    dodger.style.left = `${Math.max(0, left - 10)}px`;
}

function moveDodgerRight() {
    // Get the current left position (removing 'px' and converting to number)
    const left = parseInt(dodger.style.left) || 0;
    // Move right by 10 pixels, ensuring it doesn't exceed a boundary (e.g., 360px assuming a 400px container)
    dodger.style.left = `${Math.min(360, left + 10)}px`;
}
