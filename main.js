// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const clickEmpty = document.getElementsByClassName("like-glyph")
const clickEmptyArray = [...clickEmpty]

clickEmptyArray.forEach(element => {
  element.addEventListener("click", () => {
    mimicServerCall()
    .then(() => {
      element.innerText = FULL_HEART
      element.className = "activated-heart"
    })
    .catch(error => {
      document.getElementById("modal-message").innerText = error
      document.getElementById("modal").classList.remove("hidden")
      setTimeout(() => document.getElementById("modal").className = "hidden", 3000)
    })
    if(element.innerText === FULL_HEART){
      element.addEventListener("click", () => {
        element.classList.remove("activated-heart")
        return element.innerText = EMPTY_HEART
      })
    }
  })
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
