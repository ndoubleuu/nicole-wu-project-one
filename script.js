// Hamburger menu (show and hide)

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


// Contact 

// When the form is submitted, replace the form with a message saying "Thank you for your message! We will get back to you shortly."

//Place form into a variable
const contactForm = document.querySelector('.contact form');
console.log(contactForm);

//Place submit button into a variable
const submit = document.querySelector('.contact input[type="submit"]');
console.log(submit);

// Add event listener to submit button 
contactForm.addEventListener('submit', function(event) {
    // Prevent page from refreshing
    event.preventDefault();
    // Form should disappear and message should appear
    contactForm.textContent = `Thank you for your message! We will get back to you shortly.`;
    // Style the message
    contactForm.classList.add('thankYou');
})