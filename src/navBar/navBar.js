const btnDrawer = document.getElementById('btnDrawer')
const drawer = document.getElementById('drawer')

var statusDrawer = 'closed'
btnDrawer.addEventListener('click', (e) => {
    e.preventDefault()
    if (statusDrawer === 'closed') {
        drawer.innerHTML = `
        <div class=''>
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-dark">First item</li>
                <li class="list-group-item list-group-item-dark">Second item</li>
                <li class="list-group-item list-group-item-dark">Third item</li>
                <li class="list-group-item list-group-item-dark"><button class='btn'>LOGIN</button></li>
            </ul>
        </div>`
        statusDrawer = 'open'
    } else {
        drawer.innerHTML = ''
        statusDrawer = 'closed'
    }

})

document.querySelectorAll('[nav-link]').forEach(e => {

    e.addEventListener('click', (e) => {

        e.preventDefault()

        const section = document.getElementById('section')

        fetch(e.target.href, { 'method': 'get' }).then((res) => {
            return res.text()
        }).then((res) => {
            section.innerHTML = res
        })
    })


})



/* btnSoftware.addEventListener('click', (event) => {
    event.preventDefault()
    getInnerhtmlFromElement()
}) */