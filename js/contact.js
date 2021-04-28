// Contact page form

// When the form is submitted, replace the form with a message saying "Thank you for your message! We will get back to you shortly.":

//Create app namespace object
contactApp = {}

//Place Contact form into a variable
contactApp.contactForm = document.querySelector('.contact form');
//Place contact inputs into variables
contactApp.contactMessage = document.querySelector('.contact textarea');
contactApp.contactName = document.querySelector('.contact input[type="text"]');
contactApp.contactEmail = document.querySelector('.contact input[type="email"]');

//Create a method that will run after the submit button is clicked
contactApp.formResponse = function() {
//If textarea does not contain a message, add red border
    if (contactApp.contactMessage.value === '') {
        contactApp.contactMessage.style.border = '3px solid red';
    //If user has not entered their name into input (type text), add red border
    } else if (contactApp.contactName.value === '') {
        contactApp.contactName.style.border = '3px solid red';
    //If user has not entered their email into input (type email), add red border
    } else if (contactApp.contactEmail.value === '') {
        contactApp.contactEmail.style.border = '3px solid red';
    } else {
        // Form should disappear and message should appear
        contactApp.contactForm.textContent = 'Thank you for your message! We will get back to you shortly.';
        // Style the message
        contactApp.contactForm.classList.add('thankYou');
    }
}

//initialize the app
contactApp.init = function() {
    //Add an event listener to the form's submit button
    contactApp.contactForm.addEventListener('submit', function (event) {
        // Prevent page from refreshing
        event.preventDefault();

        // Call the formResponse function
        contactApp.formResponse();
    });
}

//Call the init method 
contactApp.init();