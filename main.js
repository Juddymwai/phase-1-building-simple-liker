// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  const span = document.querySelectorAll(' li span ')
  for ( let like of span){
    like.addEventListener('click',function(e){
      console.log('click me')
      
      mimicServerCall ()
      .then(function(data){
      if (e.target.textContent=== EMPTY_HEART){
       e.target.textContent= FULL_HEART
      e.target.className ='activated-heart'

  }
    else if (e.target.textContent=== FULL_HEART){
    e.target.textContent= EMPTY_HEART
    e.target.className=''

  }})
  .catch (function(error){
    const error1= document.querySelector('#modal')
    error1.className = ''
    error1.innerText= error
    setTimeout(function(){
      error1.className = 'hidden'

    }, 3000)
  })

  } )
  
  }



  




















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
