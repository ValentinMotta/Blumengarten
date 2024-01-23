const username = document.getElementById('username')
const password = document.getElementById('password')
const buttno = document.getElementById('button')

buttno.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
})
