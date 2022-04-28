import { db, setDoc, doc, getStorage, ref, uploadBytes, getDownloadURL } from '../index.mjs'

const btnSubmitProduct = document.getElementById('btnSubmitProduct')

const productId = document.getElementById('productId')
const name = document.getElementById('name')
const price = document.getElementById('price')
const amount = document.getElementById('amount')
const description = document.getElementById('description')
const tecnoInfo = document.getElementById('tecnoInfo')
const image = document.getElementById('images')




async function createProduct(productId, name, price, amount, description, tecnoInfo, urlImage) {
    await setDoc(doc(db, "cities", productId), {
        productId: productId,
        name: name,
        price: price,
        amount: amount,
        description: description,
        tecnoInfo: tecnoInfo,
        urlImage: urlImage,
    })
    console.log('ENVIADO')
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
            console.log('urlImage', urlImage)
            createProduct(productId.value, name.value, price.value, amount.value, description.value, tecnoInfo.value, urlImage)
        })
}

btnSubmitProduct.addEventListener('click', (e) => {
    e.preventDefault()
    sendImages(image.files[0])
    getImgUrl()
}) 