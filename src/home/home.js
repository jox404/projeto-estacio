const navBar = document.getElementById('navBar')
fetch('../navBar/navBar.html', { 'method': 'get' }).then((res) => {
    return res.text()
}).then((res) => {
    console.log(navBar)
    navBar.innerHTML = res
})