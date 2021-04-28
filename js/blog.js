// Blog page form

// When form is submitted, comment should be displayed at the end of the comments section:

//Create app namespace object
commentApp = {}

// Place Blog form and inputs into variables
commentApp.blogForm = document.querySelector('.blog form');
commentApp.commentInput = document.querySelector('.blog textarea');
commentApp.nameInput = document.querySelector('.blog #name');
commentApp.emailInput = document.querySelector('.blog #email');

// Store the div that will hold the new comment(s) in a variable
commentApp.newCommentArea = document.querySelector('.newCommentArea');

//Store current date in a variable, change date to a string
const d = new Date();
commentApp.today = d.toDateString();

commentApp.displayComment = function() {
    // Add following HTML into newly created article element (newComment)
        commentApp.newComment.innerHTML = `
        <div class="imageContainer">
            <img src="https://placekeanu.com/89/89/g" alt="User profile picture">
        </div>
        <div class="textContainer">
            <h3>${commentApp.today} by ${commentApp.userName}</h3>
            <p>${commentApp.userComment}</p>
        </div>
        `;
        // Append newComment (new article element) to newCommentArea (div) so that new comments appear on the page
        commentApp.newCommentArea.appendChild(commentApp.newComment);

        // Add class of "comment" to newComment to ensure consist styling for all comments
        commentApp.newComment.classList.add('comment');
        
        // Clear form after comment has been submitted
        commentApp.commentInput.value = '';
        commentApp.nameInput.value = '';
        commentApp.emailInput.value = '';

        // Remove red borders after comment has been submitted
        commentApp.commentInput.style.border = 'none';
        commentApp.nameInput.style.border = 'none';
}

// Create a method that will display the comment on the page (in the newCommentArea)
commentApp.formResponse = function() {
    // Create new article to hold comment each time form is submitted
    commentApp.newComment = document.createElement('article');

    // Place input values into variables to be used in conditional statement
    commentApp.userComment = commentApp.commentInput.value;
    commentApp.userName = commentApp.nameInput.value;

    // If userComment (textarea) is empty, add red border
    if (commentApp.userComment === '') {
        commentApp.commentInput.style.border = '3px solid red';
        //If userName (input #name) is empty, add red border
    } else if (commentApp.userName === '') {
        commentApp.nameInput.style.border = '3px solid red';
    // If name and comment are included in the form, display the comment
    } else {
        commentApp.displayComment();
    }
}
    
// Create method that will initialize the app
commentApp.init = function() {
    // Add event listener to submit button
    commentApp.blogForm.addEventListener('submit', function(event) {
        // Prevent page from refreshing
        event.preventDefault();

        // Call displayComment method on submit
        commentApp.formResponse();
    });
}

// Call the init method
commentApp.init();