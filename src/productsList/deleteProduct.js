import { db, deleteDoc, doc } from "../index.mjs"
export const deleteProduct = () => {
    const btnDeleteProduct = document.getElementsByClassName('btnDeleteProduct')

    for (var i = 0; i < btnDeleteProduct.length; i++) {
        btnDeleteProduct[i].addEventListener('click', async (e) => {
            const id = e.target.id
            const docRef = doc(db, 'products', `${id}`)
            await deleteDoc(docRef).then(() => {
                window.alert('Produto deletado')
                window.location.reload()
            })
        })
    }
}