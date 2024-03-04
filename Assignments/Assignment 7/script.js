
// Get the toggle button
var toggleButton = document.getElementById("toggle-high-contrast");

// Add a click event listener to the toggle button
toggleButton.addEventListener("click", function() {
    // Toggle the "high-contrast" class on the body element
    document.body.classList.toggle("high-contrast");
});
