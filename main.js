// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// user clicks on empty heart
const heart = document.querySelectorAll('.like-glyph');
heart.forEach(element => element.addEventListener('click', hClick))
function hClick(e) {
  // Invoke mimicServerCall to simulate making a server request
  // When the "server" returns a failure status:
  if(!mimicServerCall()){
    // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
    // Display the error modal by removing the .hidden class
    // Display the server error message in the modal
    // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
  } else {
    // When the "server" returns a success status:
    // Change the heart to a full heart
    // Add the .activated-heart class to make the heart appear red

  }

  console.log(e.target.parentNode)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
