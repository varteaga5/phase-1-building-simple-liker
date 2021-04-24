function init() {
  heartClickEvent();
}
document.addEventListener('DOMContentLoaded', init);
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// global variable that holds all the hearts
const hearts = document.querySelectorAll('.like-glyph');
// user clicks on empty heart
function heartClickEvent() {
  hearts.forEach(element => element.addEventListener('click', hClick))
}
function hClick(e) {
  // When a user clicks on a full heart:
  // Change the heart back to an empty heart
  // Remove the .activated-heart class
  if (e.target.innerHTML === FULL_HEART) {
    emptyHeart(hearts, e);
    return;
  }
  // Invoke mimicServerCall to simulate making a server request
  mimicServerCall()
    // When the "server" returns a failure status:
    // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
    .then((msg) => {
      fillInHeart(hearts, e);
    })
    .catch(msg => showErrorMsg());
}
// When the "server" returns a success status:
// Change the heart to a full heart
// Add the .activated-heart class to make the heart appear red
function fillInHeart(hearts, e) {
  hearts.forEach((element) => {
    e.target.innerHTML = FULL_HEART;
    e.target.classList.add('activated-heart')
  })
}
function emptyHeart(hearts, e) {
  hearts.forEach((element) => {
    e.target.innerHTML = EMPTY_HEART;
    e.target.classList.add('activated-heart')
  })
}
function initialEmptyHeart(hearts, e) {
  hearts.forEach((e) => {
    e.target.innerHTML = EMPTY_HEART;
    e.target.classList.add('activated-heart')
  })
}

function showErrorMsg() {
  // Display the error modal by removing the .hidden class
  // Display the server error message in the modal
  // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
  const element = document.getElementById('modal');
  element.classList.remove('hidden');
  setTimeout(() => {
    hideErrorMsg()
  }, 3000);
}
function hideErrorMsg() {
  const element = document.getElementById('modal');
  element.classList.add('hidden');
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
