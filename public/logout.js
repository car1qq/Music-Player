// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, 
         signOut
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsPuDiX8qJs1pmtj7fDPqpEwFeo4SCdvQ",
  authDomain: "socialapp-17226.firebaseapp.com",
  databaseURL: "https://socialapp-17226-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "socialapp-17226",
  storageBucket: "socialapp-17226.appspot.com",
  messagingSenderId: "605228920802",
  appId: "1:605228920802:web:860a890dd72088d31f93bb",
  measurementId: "G-C7LQXJ0LDR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize auth
const auth = getAuth();

//Logout user
const logoutBtn = document.getElementById("logout")
logoutBtn.addEventListener('click', (e)=>{
  signOut(auth)
  .then(() => {
    // Sign out  
    window.location.href = "index.html"
  })
  .catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorMessage)
  })
})
