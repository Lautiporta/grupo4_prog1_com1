
let formLogin = document.querySelector('.formLogin');
let mensaje = "Por favor complete el campo email";


formLogin.addEventListener('submit', function (event) {

  event.preventDefault();


  let emailField = document.querySelector('.email');
  let passwordField = document.querySelector('.password');

// trim es opcional
  const email = emailField.value();
  const password = passwordField.value();

 
  if (email === '') {
    alert(mensaje);
    return; 
  }


  if (password === '') {
    alert(mensaje);
    return; 
  }

  
  window.location.href = 'index.html';
});
