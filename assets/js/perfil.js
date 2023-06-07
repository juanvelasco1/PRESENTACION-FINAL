var user = document.getElementById('user');
var correo = document.getElementById('correo');


user.innerHTML = localStorage.getItem('user');
correo.innerHTML = localStorage.getItem('correo');