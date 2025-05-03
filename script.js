// This JavaScript file handles the interactive behavior of the navigation menu

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // ---- MOBILE MENU TOGGLE ----

  // Get reference to the hamburger menu icon
  const menuBar = document.getElementById('menu-bar');

  // Get reference to the menu list container 
  const menuList = document.getElementById('menu-list');

  // Add click event listener to the hamburger menu icon
  menuBar.addEventListener('click', function (event) {
    // Toggle the 'active' class on menu list container
    // When the class is present, the menu will be visible (see CSS)
    menuList.classList.toggle('active');

    // Stop the click event from propagating to document
    // This prevents the document click handler from immediately closing the menu
    event.stopPropagation();
  });

  // ---- CLOSE MENU WHEN CLICKING OUTSIDE ----

  // Add click event listener to the entire document
  document.addEventListener('click', function (event) {
    // Check if the click was outside the menu and not on the menu button
    if (!menuList.contains(event.target) && event.target !== menuBar) {
      // Remove 'active' class to hide the menu
      menuList.classList.remove('active');
    }
  });

  // ---- ADDITIONAL FUNCTIONALITY COULD BE ADDED HERE ----
  // For example:
  // - Submenu toggles for mobile view
  // - Smooth scrolling for anchor links
  // - Active state for current page
  // - Animation effects for menu transitions

});