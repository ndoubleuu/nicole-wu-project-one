// Hamburger menu (show and hide) for all pages

// Place hamburger menu into a variable 
const menu = document.querySelector('.hamburger');
//Place dropdown into a variable
const dropdown = document.querySelector('.menu .dropdown');

// Add event listener to hamburger which will wait for user to click on it
menu.addEventListener('click', function() {
    // If dropdown has a class of "showMenu," remove the class to hide the menu
    if (dropdown.classList.contains('showMenu')) {
        dropdown.classList.remove('showMenu');
    // If dropdown DOES NOT have a class of "showMenu," add it to show the menu
    } else {
        dropdown.classList.add('showMenu');
    }
})