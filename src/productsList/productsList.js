import { collection, db, getDocs, orderBy, limit, startAfter, query, startAt, doc, getDoc } from '../index.mjs'
import { deleteProduct } from './deleteProduct.js';
import { updateProduct } from './updateProduct.js'

//CARREGAR LISTA DE PRODUTOS
const list = document.getElementById('list')

const querySnapshot = await getDocs(collection(db, 'products'))



querySnapshot.forEach(doc => {
    const data = doc._document.data.value.mapValue.fields

    const product = `
        <th scope="row">${data.name.stringValue}</th>
        <td>${data.productId.stringValue}</td>
        <td>${data.price.stringValue} R$</td>
        <td>${data.amount.stringValue}</td>
        <td>
            <button type="button" class="btn btn-warning btnBuyProduct" id="${data.productId.stringValue}">COMPRAR</button>
            <button type="button" class="btn btn-danger btnDeleteProduct " id="${data.productId.stringValue}" >REMOVER</button>
            <button type="button" class="btn btn-primary btnUpdateProduct " id="${data.productId.stringValue}" data-bs-toggle="modal" data-bs-target="#myModal">UPDATE</button>
        </td>
    `
    var itemList = document.createElement('tr')
    itemList.innerHTML = product

    list.appendChild(itemList)
});

//COMPRAR PRODUTO

const btnBuyProduct = document.getElementsByClassName(`btnBuyProduct`)
const renderProducts = async () => {
    for (var i = 0; i < btnBuyProduct.length; i++) {

        btnBuyProduct[i].addEventListener('click', async (e) => {
            e.preventDefault()

            const container = document.getElementById('container')

            const setProductBuy = (productData) => {
                const data = {
                    amount: productData.amount.stringValue,
                    description: productData.description.stringValue,
                    name: productData.name.stringValue,
                    price: productData.price.stringValue,
                    productId: productData.productId.stringValue,
                    tecnoInfo: productData.tecnoInfo.stringValue,
                    urlImage: productData.urlImage.stringValue,
                }

                container.innerHTML = ` <div id="navBar"></div>
            <div class="containerProduct md-1">
                <div class="row">
                    <div class="col-12 md-3">
                        <h1>${data.name}</h1>
                    </div>
        
                    <div class="conteiner col-3 mt-0" style="width:300px; height:300px">
                        <img src="${data.urlImage}"
                            alt="imagem do produto" class="d-block" style="width:100%; height:100%">
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-12 productPrice">
                                <h2>Valor</h2>
                                <p>R$ ${data.price}</p>
                            </div>
                            <div class="col-12 productDescription">
                                <h2>Descrição</h2>
                                ${data.description}
                            </div>
                            <div class="col-12">
                                <button class="btn btn-warning">Comprar</button>
                            </div>
        
                        </div>
                    </div>
                    <div class="col-12">
                        <h2>INFORMAÇÕES TECNICAS</h2>
                        <p>${data.tecnoInfo}
                        </p>
                    </div>
                </div>
            </div>`
            }

            const docRef = doc(db, "products", e.target.id)

            getDoc(docRef).then((res) => {
                return res._document.data.value.mapValue.fields
            }).then((res) => {
                console.log(res)
                setProductBuy(res)
            })

        })
    }
}
await renderProducts().then(() => {
    deleteProduct()
    updateProduct()
})



//NAVBAR
const navBar = document.getElementById('navBar')
fetch('../../src/navBar/navBar.html', { 'method': 'get' }).then((res) => {
    return res.text()
}).then((res) => {
    navBar.innerHTML = res
})