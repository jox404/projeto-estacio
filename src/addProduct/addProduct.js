import { db, setDoc, doc, getStorage, ref, uploadBytes, getDownloadURL, getDoc } from '../index.mjs'

const btnSubmitProduct = document.getElementById('btnSubmitProduct')

const formAddProducts = document.getElementById('formAddProducts')
const productId = document.getElementById('productId')
const name = document.getElementById('name')
const price = document.getElementById('price')
const amount = document.getElementById('amount')
const description = document.getElementById('description')
const tecnoInfo = document.getElementById('tecnoInfo')
const image = document.getElementById('images')


async function createProduct(productId, name, price, amount, description, tecnoInfo, urlImage) {
    await setDoc(doc(db, "products", productId), {
        productId: productId,
        name: name,
        price: price,
        amount: amount,
        description: description,
        tecnoInfo: tecnoInfo,
        urlImage: urlImage,
    })
    window.alert("PRODUTO ADCIONADO")
    const clearInput = document.querySelectorAll('input')
    clearInput.forEach((input) => {
        input.value = ''
    })
}


async function sendImages(image) {
    const storage = getStorage();
    const imagesRef = ref(storage, 'productsImages/' + `${productId.value}`)
    await uploadBytes(imagesRef, image).then((snapshot) => {
        console.log('sendImages', snapshot)
    })
}
async function getImgUrl() {
    const storage = getStorage()
    const imageRef = ref(storage, 'productsImages/' + `${productId.value}`)

    getDownloadURL(imageRef)
        .then((urlImage) => {
            createProduct(productId.value, name.value, price.value, amount.value, description.value, tecnoInfo.value, urlImage)
        })
}

btnSubmitProduct.addEventListener('click', async (e) => {
    e.preventDefault()

    const inputs = document.querySelectorAll('input')

    var emptyInput = false
    var duplicateId = false

    await inputs.forEach(input => {
        if (input.value == '') {
            emptyInput = true
        }
    })

    if (emptyInput == true) {
        window.alert('um dos campos está vazio')
    } else {

        const docRef = doc(db, "products", `${productId.value}`)

        getDoc(docRef).then((res) => {
            return res
        }).then((res) => {
            const id = res._document
            if (id === null) {
                sendImages(image.files[0]).then(() => {
                    getImgUrl()
                })
            } else {
                duplicateId = true
                window.alert('id duplicado')
            }
        })


    }


})



//NAV BAR
const navBar = document.getElementById('navBar')
fetch('../navBar/navBar.html', { 'method': 'get' }).then((res) => {
    return res.text()
}).then((res) => {
    navBar.innerHTML = res
})