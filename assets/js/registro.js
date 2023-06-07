// Obtener el valor de los inputs del html "Correo" y "Contraseña"
var name = document.getElementById('user');
var correo = document.getElementById('correo');
var pw = document.getElementById('pw');

// storing input from register-form
const Store = () => {
    localStorage.clear();
    localStorage.setItem('user', user.value);
    localStorage.setItem('correo', correo.value);
    localStorage.setItem('pw', pw.value);
    alert("Registro realizado con exito")
    
    window.location.href = "LOGIN.html";
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('user');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
        location.href='main.html'; 
    }else {
        alert('ERROR.');
    }
}