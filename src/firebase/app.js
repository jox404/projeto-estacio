// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGTvA79pDUGHVQgNCoLxBEkyi-JLt1Uws",
  authDomain: "html-css-js-98aaf.firebaseapp.com",
  projectId: "html-css-js-98aaf",
  storageBucket: "html-css-js-98aaf.appspot.com",
  messagingSenderId: "294499340289",
  appId: "1:294499340289:web:b6f09bfd4ba39d21f57000"
};

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('Logged in as ${user.email}');
  } else {
    console.log('No user');
  }
});



