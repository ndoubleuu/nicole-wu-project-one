// Contact page form

// When the form is submitted, replace the form with a message saying "Thank you for your message! We will get back to you shortly."

//Place Contact form into a variable
const contactForm = document.querySelector('.contact form');
const contactMessage = document.querySelector('.contact textarea');
const contactName = document.querySelector('.contact input[type="text"]');
const contactEmail = document.querySelector('.contact input[type="email"]');

// Add event listener to submit button 
contactForm.addEventListener('submit', function (event) {
    // Prevent page from refreshing
    event.preventDefault();

    //If textarea does not contain a message, alert:
    if (contactMessage.value === "") {
        alert(`Don't forget to enter a message for us before submitting!`);
    //If user has not entered their name into input (type text), alert:
    } else if (contactName.value === "") {
        alert(`Don't forget to enter your name!`);
    //If user has not entered their email into input (type email), alert:
    } else if (contactEmail.value === "") {
        alert(`Don't forget to enter your e-mail address!`);
    } else {
        // Form should disappear and message should appear
        contactForm.textContent = `Thank you for your message! We will get back to you shortly.`;
        // Style the message
        contactForm.classList.add('thankYou');
    }
})