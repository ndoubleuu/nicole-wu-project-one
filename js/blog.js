// Blog page form

// When form is submitted, comment should be displayed at the end of the comments section:

// Place Blog form and inputs into variables
const blogForm = document.querySelector('.blog form');
const commentInput = document.querySelector('.blog textarea');
const nameInput = document.querySelector('.blog #name');
const emailInput = document.querySelector('.blog #email');

// Store the div that will hold the new comment(s) in a variable
const newCommentArea = document.querySelector('.newCommentArea');

//Store current date in a variable, change date to a string
const d = new Date();
const today = d.toDateString();

// Add event listener to submit button
blogForm.addEventListener('submit', function(event) {
    // Prevent page from refreshing
    event.preventDefault();

    //create new article to hold comment each time form is submitted
    const newComment = document.createElement('article');

    //Place input values into variables to be used in conditional statement
    const userComment = commentInput.value;
    const userName = nameInput.value;

    //If userComment (textarea) is empty, add red border
    if (userComment === "") {
        commentInput.style.border = "3px solid red";
        //If userName (input #name) is empty, add red border
    } else if (userName === "") {
        nameInput.style.border = "3px solid red";
    // If name and comment are included in the form:
    } else {
        // Add following HTML into newly created article element (newComment)
        newComment.innerHTML = `
        <div class="imageContainer">
            <img src="https://placekeanu.com/89/89/g" alt="User profile picture">
        </div>
        <div class="textContainer">
            <h3>${today} by ${userName}</h3>
            <p>${userComment}</p>
        </div>
        `;
        // Append newComment (new article element) to newCommentArea (div) so that new comments appear on the page
        newCommentArea.appendChild(newComment);

        // Add class of "comment" to newComment to ensure consist styling for all comments
        newComment.classList.add('comment');
        
        // Clear form after comment has been submitted
        commentInput.value = "";
        nameInput.value = "";
        emailInput.value = "";

        // Remove red borders
        commentInput.style.border = "none";
        nameInput.style.border = "none";
    }
})