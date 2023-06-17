// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBl0P0AX1rOVddE2YeBFPfrmsWuUu_R-HI",
    authDomain: "salvific-safety-solutions.firebaseapp.com",
    databaseURL: "https://salvific-safety-solutions-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "salvific-safety-solutions",
    storageBucket: "salvific-safety-solutions.appspot.com",
    messagingSenderId: "663904063979",
    appId: "1:663904063979:web:f59986488a941f87f589ae",
    measurementId: "G-HL3EYZH0LB"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Login function
  function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        document.getElementById("container").style.display = "none";
        document.getElementById("logout-button").style.display = "block";
        alert("Successfully logged in");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = errorMessage;
        console.log(errorMessage);
      });
  }
  
  // Register function
  function register() {
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        document.getElementById("container").style.display = "none";
        document.getElementById("logout-button").style.display = "block";
        alert("Successfully registered");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = errorMessage;
        console.log(errorMessage);
      });
  }
  
  // Logout function
  function logout() {
    firebase.auth().signOut()
      .then(function() {
        document.getElementById("container").style.display = "block";
        document.getElementById("logout-button").style.display = "none";
        alert("Successfully logged out");
      })
      .catch(function(error) {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = error;
      });
  }
  
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  
  signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
  });
  
  signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
  });