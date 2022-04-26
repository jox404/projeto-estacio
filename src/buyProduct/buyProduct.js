fetch('../navBar/navBar.html', { method: 'get' }).then((res) => {
    return res.text()
}).then((res) => {
    document.getElementById('navBar').innerHTML = res
})

