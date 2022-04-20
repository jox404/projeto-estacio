/* LINK PARA PEGAR OS CDN DO FIRE BASE   https://cdnjs.com/libraries/firebase */

import { initializeApp } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.10/firebase-app.min.js';
import { getFirestore } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.10/firebase-firestore.min.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAGTvA79pDUGHVQgNCoLxBEkyi-JLt1Uws',
  authDomain: 'html-css-js-98aaf.firebaseapp.com',
  projectId: 'html-css-js-98aaf',
  storageBucket: 'html-css-js-98aaf.appspot.com',
  messagingSenderId: '294499340289',
  appId: '1:294499340289:web:b6f09bfd4ba39d21f57000',
};
console.log('teste');
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

