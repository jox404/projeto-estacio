import { collection, db, getDocs, orderBy, limit, startAfter, query, startAt } from '../index.mjs'

/* const querySnapshot = await getDocs(collection(db, 'cities'))

querySnapshot.orderBy("price").limit(1)

const list = document.getElementById('list')
querySnapshot.forEach(doc => {

    console.log(doc._document.data.value.mapValue.fields)
    const data = doc._document.data.value.mapValue.fields

    var itemList = document.createElement('li')
    itemList.innerHTML = `${data.price.stringValue}`

    list.appendChild(itemList)
}); */


const first = query(collection(db, 'cities'), orderBy("price"), limit(1))
const documentSnapshots = await getDocs(first)

/* const lattVisible = documentSnapshots.docs[documentSnapshots.docs.legth - 1]
console.log("last", lattVisible) */

/* const next = query(collection(db, "cities"),
    orderBy('price'),
    startAt(6),
    limit(5)); */

console.log(documentSnapshots.docs)