import { db, createUserWithEmailAndPassword, getAuth } from '../index.mjs'


const createUser = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
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
    console.log('Usuario criado!')
    window.alert('Usuario criado!')
}


document.getElementById('btnSubmit').addEventListener('click', (e) => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value
    const termOfService = document.getElementById('termOfService')

    if (password === passwordConfirm) {
        if (termOfService.checked === true) {
            createUser(email, password)
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
            document.getElementById('passwordConfirm').value = ''
            document.getElementById('termOfService').checked = false
        } else {
            window.alert('Infelizmente não podemos proceguir se o senhor(a) não aceitar os termos')
        }
    } else {
        if (passwordConfirm === '') {
            window.alert('o campo "corfirmar senha" está vazio')
        } else if (password === '') {
            window.alert('o campo "senha" está vazio')
        } else {
            window.alert('a "senha de confirmação" é diferente da "senha"')
        }
    }
})
