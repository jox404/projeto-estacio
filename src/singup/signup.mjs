import { db, createUserWithEmailAndPassword, getAuth } from '../index.mjs'

console.log(db)

const createUser = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        console.log(user)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        if (errorCode === 'auth/email-already-in-use') {
            window.alert('email já está sendo usado')
        } else {
            window.alert('confira se você preencheu todos os campos')
        }
    })
    console.log('chamou')
}

document.getElementById('btnSubmit').addEventListener('click', (e) => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log(email, password)

    createUser(email, password)
})
