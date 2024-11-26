

let formulario = document.querySelector(".formLogin");
let campoEmail = document.querySelector('#email');

let campoPassword = document.querySelector('#password');



let errorEmail = document.querySelector('.invalid-feedback-email');

let errorPassword = document.querySelector('.invalid-feedback-password');


formulario.addEventListener('submit', function(event){
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
