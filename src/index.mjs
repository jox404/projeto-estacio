// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
import { getFirestore, setDoc, doc, collection, getDocs, orderBy, limit, startAfter, query, startAt, getDoc, deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js'
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
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db, getAuth, onAuthStateChanged, getFirestore, setDoc, doc, createUserWithEmailAndPassword, collection, getDocs, orderBy, limit, startAfter, query, startAt, getStorage, ref, uploadBytes, getDownloadURL, getDoc, deleteDoc, updateDoc }
