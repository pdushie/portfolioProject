// Get the menu icon, body, and menu elements
const navicon = document.getElementById('navicon');
const menu = document.querySelector('nav ul');

// Function to toggle the menu visibility
function toggleMenu() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Add a click event listener to the menu icon to toggle the menu
navicon.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click event from bubbling up to the body
    toggleMenu(); // Toggle the menu
});

// Add a click event listener to the body to close the menu if it's open
document.body.addEventListener('click', function(event) {
    // If the menu is open and the clicked element is not part of the menu, close it
    if (menu.style.display === 'block' && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});
