import { db, doc, getStorage, ref, uploadBytes, getDownloadURL, getDoc, updateDoc } from '../index.mjs'

const btnSubmitProduct = document.getElementById('btnSubmitProduct')

var productId = document.getElementById('productId')
var name = document.getElementById('name')
var price = document.getElementById('price')
var amount = document.getElementById('amount')
var description = document.getElementById('description')
var tecnoInfo = document.getElementById('tecnoInfo')
var image = document.getElementById('images')


export const updateProduct = async () => {
    const btnUpdateProduct = document.getElementsByClassName('btnUpdateProduct')
    var data = undefined

    for (var i = 0; i < btnUpdateProduct.length; i++) {

        btnUpdateProduct[i].addEventListener('click', (event) => {
            const getData = async (id) => {
                const docRef = doc(db, 'products', id)
                data = await getDoc(docRef)
                console.log('data', data, id)
            }
            event.preventDefault()
            const id = event.target.id



            var urlImage = ''
            getData(id).then(() => {
                productId.value = data._document.data.value.mapValue.fields.productId.stringValue
                name.value = data._document.data.value.mapValue.fields.name.stringValue
                price.value = data._document.data.value.mapValue.fields.price.stringValue
                amount.value = data._document.data.value.mapValue.fields.amount.stringValue
                description.value = data._document.data.value.mapValue.fields.description.stringValue
                tecnoInfo.value = data._document.data.value.mapValue.fields.tecnoInfo.stringValue
                urlImage = data._document.data.value.mapValue.fields.urlImage.stringValue
            })



            btnSubmitProduct.addEventListener('click', async (event) => {
                event.preventDefault()

                productId = document.getElementById('productId').value
                name = document.getElementById('name').value
                price = document.getElementById('price').value
                amount = document.getElementById('amount').value
                description = document.getElementById('description').value
                tecnoInfo = document.getElementById('tecnoInfo').value
                const sendImages = async (image) => {
                    const storage = getStorage();
                    const imagesRef = ref(storage, 'productsImages/' + `${productId}`)
                    await uploadBytes(imagesRef, image).then((snapshot) => {
                        /* console.log('sendImages', snapshot) */
                    }).then(async (res) => {
                        await getDownloadURL(imagesRef).then((res) => {
                            /* console.log(res) */
                        })
                    })
                }

                urlImage = image.files.length === 0 ? urlImage : sendImages(image.files[0])


                const docRef = doc(db, 'products', id)

                await updateDoc(docRef, {
                    productId: productId,
                    name: name,
                    price: price,
                    amount: amount,
                    description: description,
                    tecnoInfo: tecnoInfo,
                })


            })
        })
    }
}