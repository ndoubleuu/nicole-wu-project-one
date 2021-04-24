// Hamburger menu (show and hide)

// Place hamburger menu into variable 
const menu = document.querySelector('.hamburger');
console.log(menu);
const dropdown = document.querySelector('.menu .dropdown');
console.log(dropdown);

// Add event listener to hamburger which will wait for user to click on it
menu.addEventListener('click', function() {
    // If dropdown has a class of "showMenu," remove the class to hide the menu
    if (dropdown.classList.contains('showMenu')) {
        dropdown.classList.remove('showMenu');
        console.log('no menu')
    // If dropdown DOES NOT have a class of "showMenu," add it to show the menu
    } else {
        dropdown.classList.add('showMenu');
        console.log('menu')
    }
})


// Contact 

// When the form is submitted, replace the form with a message saying "Thank you for your message! I will get back to you shortly."