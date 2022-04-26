import { db, setDoc, doc } from '../index.mjs'

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
    console.log('ENVIADO')
}

btnSubmitProduct.addEventListener('click', (e) => {
    e.preventDefault()
    createProduct(productId.value, name.value, price.value, amount.value, description.value, tecnoInfo.value)
}) 