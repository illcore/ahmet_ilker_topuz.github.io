// script.js

// Function to update the visitor counter
function updateVisitorCounter() {
    // Check if 'visitCount' is stored in localStorage
    if (localStorage.getItem('visitCount')) {
        // Increment the counter by 1
        let count = parseInt(localStorage.getItem('visitCount')) + 1;
        localStorage.setItem('visitCount', count);
        document.getElementById('counter').textContent = count;
    } else {
        // Initialize the counter to 1
        localStorage.setItem('visitCount', 1);
        document.getElementById('counter').textContent = 1;
    }
}

// Call the function to update the counter when the page loads
updateVisitorCounter();
