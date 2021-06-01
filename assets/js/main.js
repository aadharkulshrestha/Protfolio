// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAPPU4kCZf9oRYRuYy_hFYx6DBwcRLSr4I",
    authDomain: "portfolio-d028c.firebaseapp.com",
    projectId: "portfolio-d028c",
    storageBucket: "portfolio-d028c.appspot.com",
    messagingSenderId: "943977931501",
    appId: "1:943977931501:web:d7cc81c95125772643a2e4",
    measurementId: "G-4SKWW7XRYS"
  };
  
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var queryRef = firebase.database().ref('Queries');



/* SUBMIT BUTTON */
document.getElementById('contactForm').addEventListener('submit' , submitForm);

function submitForm(e) {
    e.preventDefault();

  //Get VAlues

  var name = getInputVal("name");
  var email = getInputVal("email");
  var question = getInputVal("question");

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();


    
    //Save Message
    saveMessage(name, email, question);
    
}


// Get Input Values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, question){
    var newQueryRef = queryRef.push();
    newQueryRef.set({
      name: name,
      email:email,
      question: question
    });
  }
  

