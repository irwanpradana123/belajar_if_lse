//buat sebuah handleSubmit function

function handleSubmit(event) {

    //prevent reload page
    event.preventDefault()

    //default username & password
    var def_email = "Irwanpradana@gmail.com"
    var def_pass = "11111"

    //kita tangkap value dari input user 
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    // console.log('email, password')

    //compare def mail dan pass dengan input user 
    if (def_email === email && def_pass === password) {
        alert("login berhasil")
        window.location.href = 'home.html'
    } else {
        alert("login gagal")
    }
}