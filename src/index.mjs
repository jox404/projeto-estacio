// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'
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

const btnSubmitProduct = document.getElementById('btnSubmitProduct')

const productId = document.getElementById('productId')
const name = document.getElementById('name')
const price = document.getElementById('price')
const amount = document.getElementById('amount')
const description = document.getElementById('description')
const tecnoInfo = document.getElementById('tecnoInfo')

async function createProduct(productId, name, price, amount, description, tecnoInfo) {
    await setDoc(doc(db, "cities", productId), {
        productId: productId,
        name: name,
        price: price,
        amount: amount,
        description: description,
        tecnoInfo: tecnoInfo,
    })
    console.log('chamou')
}

btnSubmitProduct.addEventListener('click', (e) => {
    e.preventDefault()
    createProduct(productId.value, name.value, price.value, amount.value, description.value, tecnoInfo.value)
})





