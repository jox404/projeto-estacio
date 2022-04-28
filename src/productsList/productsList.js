import { collection, db, getDocs, orderBy, limit, startAfter, query, startAt, doc, getDoc } from '../index.mjs'

const list = document.getElementById('list')

const querySnapshot = await getDocs(collection(db, 'cities'))

/* querySnapshot.forEach(doc => {

    
    const data = doc._document.data.value.mapValue.fields

    var itemList = document.createElement('li')
    itemList.innerHTML = `${data.price.stringValue}`

    list.appendChild(itemList)
}); */


/* const first = query(collection(db, 'cities'), orderBy("price"), limit(1))
const documentSnapshots = await getDocs(first) */

/* const lattVisible = documentSnapshots.docs[documentSnapshots.docs.legth - 1]
console.log("last", lattVisible) */

/* const next = query(collection(db, "cities"),
    orderBy('price'),
    startAt(6),
    limit(5)); */

/* console.log(documentSnapshots.docs) */



//COMPRAR PRODUTO

const btnBuyProduct = document.getElementById('btnBuyProduct01')

btnBuyProduct.addEventListener('click', async (e) => {
    e.preventDefault()


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

        fetch('../buyProduct/buyProduct.html', { method: 'get' }).then((res) => {
            /* console.log(res) */
            return res.text()
        }).then((res) => {
            /* console.log(res) */
            list.innerHTML = ` <div id="navBar"></div>
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
        })

    }


    const docRef = doc(db, "cities", "0001")

    getDoc(docRef).then((res) => {
        return res._document.data.value.mapValue.fields
    }).then((res) => {
        console.log(res)
        setProductBuy(res)
    })


})