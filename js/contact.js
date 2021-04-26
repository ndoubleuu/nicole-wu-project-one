// Contact page form

// When the form is submitted, replace the form with a message saying "Thank you for your message! We will get back to you shortly.":

//Place Contact form into a variable
const contactForm = document.querySelector('.contact form');
//Place contact inputs into variables
const contactMessage = document.querySelector('.contact textarea');
const contactName = document.querySelector('.contact input[type="text"]');
const contactEmail = document.querySelector('.contact input[type="email"]');

// Add event listener to submit button 
contactForm.addEventListener('submit', function (event) {
    // Prevent page from refreshing
    event.preventDefault();

    //If textarea does not contain a message, add red border
    if (contactMessage.value === '') {
        contactMessage.style.border = '3px solid red';
    //If user has not entered their name into input (type text), add red border
    } else if (contactName.value === '') {
        contactName.style.border = '3px solid red';
    //If user has not entered their email into input (type email), add red border
    } else if (contactEmail.value === '') {
        contactEmail.style.border = '3px solid red';
    } else {
        // Form should disappear and message should appear
        contactForm.textContent = 'Thank you for your message! We will get back to you shortly.';
        // Style the message
        contactForm.classList.add('thankYou');
    }
})