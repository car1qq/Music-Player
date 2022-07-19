// Import the functions you need from the SDKs you need
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
import { getFirestore, 
         collection, 
         doc,
         getDoc,
         addDoc,
         setDoc 
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage,
         uploadBytesResumable,
         getDownloadURL,
         ref as storageRef } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

console.log ('works!')


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
const db = getFirestore();
const storage = getStorage();






//play funtionality 
let masterPlay = document.getElementById('masterPlay');
