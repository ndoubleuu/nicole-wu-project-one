// Blog page form

// When form is submitted, comment should be displayed at the end of the comments section

// Place Blog form into variable
const blogForm = document.querySelector('.blog form');
console.log(blogForm);

// Add event listener to submit button
blogForm.addEventListener('submit', function(event) {
    // Prevent page from refreshing
    event.preventDefault();

})