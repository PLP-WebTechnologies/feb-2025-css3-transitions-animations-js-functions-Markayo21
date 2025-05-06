// Function to store user preferences in localStorage
function storeUserPreference(key, value) {
  localStorage.setItem(key, value); // Store the data with the given key and value in localStorage
}

// Function to retrieve user preferences from localStorage
function getUserPreference(key) {
  return localStorage.getItem(key); // Get the data associated with the given key from localStorage
}

// Function to apply the stored user preference to the button color
function applyUserPreferences() {
  const storedColor = getUserPreference("favoriteColor"); // Retrieve the favorite color from localStorage

  if (storedColor) {
    // If there is a stored color, apply it to the button's background
    document.querySelector("button").style.backgroundColor = storedColor;
  }
}

// Add event listener to the button to trigger color change
document.querySelector("button").addEventListener("click", function () {
  const newColor = prompt("Enter your favorite color:"); // Prompt the user to enter their favorite color
  storeUserPreference("favoriteColor", newColor); // Store the color in localStorage
  document.querySelector("button").style.backgroundColor = newColor; // Apply the new color to the button
});

// When the page loads, apply stored preferences (color)
window.onload = applyUserPreferences; // This ensures the button has the user’s saved color on page load
