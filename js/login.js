// Seleccionar el formulario
let formLogin = document.querySelector('.formLogin');
let mensaje = "Por favor complete el campo email";

// Escuchar el evento submit del formulario
formLogin.addEventListener('submit', function (event) {
  // Prevenir el envío por defecto del formulario
  event.preventDefault();

  // Seleccionar los campos de email y contraseña
  const emailField = document.querySelector('.email');
  const passwordField = document.querySelector('.password');

  // Obtener los valores de los campos
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  // Validar que el campo email no esté vacío
  if (email === '') {
    alert(mensaje);
    return; // Detener la ejecución
  }

  // Validar que el campo contraseña no esté vacío
  if (password === '') {
    alert(mensaje);
    return; // Detener la ejecución
  }

  // Si las validaciones son correctas, redirigir a la página principal
  window.location.href = 'index.html';
});
