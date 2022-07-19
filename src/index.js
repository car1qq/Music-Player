// Import the firebase functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getAuth, 
  onAuthStateChanged
} from "firebase/compat/auth";

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


//-------------------------------------- Initialize Services------------------------------------------//
const app = initializeApp(firebaseConfig);
const auth = getAuth();

console.log ('Index Read!');

const login = document.getElementById("login");
const logout = document.getElementById("logout");
const userDP = document.getElementById("userDP");
const my_music = document.getElementById("my_music");
const userID = document.getElementById("userID");
const display2 = document.getElementById("display2");

//check if user is authenticated
onAuthStateChanged(auth, (user) => {
    if (user) {
      window.uid = user.uid;
      const userName = user.displayName;
      const userEmail = user.email;

      logout.classList.remove("hidden");
      userDP.classList.remove("hidden");
      userDP.title = userName;
      userID.title = uid;
      if (user.photoURL==null){
        userPhoto = "images/placeholder.png";
      }else{
        var userPhoto = user.photoURL;
      }
      userDP.src = userPhoto;

      if (display2 != null) {
      display2.classList.remove("hidden");
    }

    } else {
      login.classList.remove("hidden");
      my_music.classList.add("hidden");
      
      if (display2 != null) {
      const display1 = document.getElementById("display1");
      const loginRequest = document.createElement("div");
      loginRequest.classList.add("alert");
      loginRequest.innerHTML = "<a href='login.html'>Log in </a> to upload your music to groove hits.";

      display1.appendChild(loginRequest);
    }

      login.onclick = function(){
        window.location.href = "login.html";
    }

      console.log("User is not authenticated");
    }    
  });
  
