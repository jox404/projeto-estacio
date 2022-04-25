const btnDrawer = document.getElementById('btnDrawer')
const drawer = document.getElementById('drawer')

var statusDrawer = 'closed'
btnDrawer.addEventListener('click', (e) => {
    e.preventDefault()
    if (statusDrawer === 'closed') {
        drawer.innerHTML = `
        <div class=''>
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-dark"><i class="bi bi-person"></i>Minha conta</li>
                <li class="list-group-item list-group-item-dark"><i class="bi bi-bag-heart"></i>Meus pedidos</li>
                <li class="list-group-item list-group-item-dark"><i class="bi bi-basket2"></i>Promoções</li>
                <li class="list-group-item list-group-item-dark"><i class="bi bi-headset"></i>Atendimento</li>
                <li class="list-group-item list-group-item-dark"> <i class="bi bi-box-arrow-in-right"></i><botton>Log-in</botton> </li>
                <li class="list-group-item list-group-item-dark"><i class="bi bi-person-plus"></i> <botton>Register</botton> </li>
               
            </ul>
        </div>`
        statusDrawer = 'open'
    } else {
        drawer.innerHTML = ''
        statusDrawer = 'closed'
    }

})
