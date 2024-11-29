

let formulario1 = document.querySelector(".formLogin");
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let errorEmail = document.querySelector('.invalid-feedback-email');
let errorPassword = document.querySelector('.invalid-feedback-password');

formulario1.addEventListener('submit', function(event){
    event.preventDefault();
    let valid = true;

    if (campoEmail.value == "") {
      errorEmail.innerText = 'Por favor complete el campo email';
      errorEmail.style.display = 'block';
      valid = false;
  }
    if (campoPassword.value == "") {
        errorPassword.innerText = 'Por favor complete el campo contraseña';
        errorPassword.style.display = 'block';
        valid = false;
    } else {
        errorPassword.style.display = 'none';
    }
    if (valid) {
        formulario.submit();
    }
});




let formulario = document.querySelector(".formBuscar");  
let campoBusqueda = document.querySelector('#searchInput'); 
let errorBusqueda = document.querySelector('.invalid-feedback-searchInput');  

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let valid = true;
    
    if (campoBusqueda.value === "") {
        errorBusqueda.innerText = 'Por favor complete el campo de búsqueda';
        errorBusqueda.style.display = 'block';
        valid = false;
    }
    
    else if (campoBusqueda.value.length < 3) {
        errorBusqueda.innerText = 'El término de búsqueda debe tener al menos 3 caracteres';
        errorBusqueda.style.display = 'block';
        valid = false;
    } 

    
    if (valid) {
        formulario.submit();
}});