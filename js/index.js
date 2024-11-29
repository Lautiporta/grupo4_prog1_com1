let api = 'https://dummyjson.com/recipes';
let cantidadRecetas = 0; 


function obtenerRecetas() {
    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.recipes); 
            let arrayDeRecetas = data.recipes;
            let seccion = document.querySelector('.container1');
            let allRecipesHTML = ""; 

            for (let i = cantidadRecetas; i < cantidadRecetas + 10 && i < arrayDeRecetas.length; i++) {
                allRecipesHTML += `<article class="productos">
                 <div class="detalles1"> 
                 <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}"> 
                 <p class="nombre">${arrayDeRecetas[i].name}</p>
                  <p>Dificultad: ${arrayDeRecetas[i].difficulty}</p> 
                  </div> <div class="productosLink"> 
                  <a class="detalles2" href="receta.html?id=${arrayDeRecetas[i].id}">Detalle</a> </div> </article>`;;
            }
            seccion.innerHTML += allRecipesHTML;
            cantidadRecetas += 10;
        })
        .catch(function(error) {
            console.log("El error es: " + error);
        });
}

document.querySelector('.cargar-mas').addEventListener('click', function(e) {
    e.preventDefault(); 
    obtenerRecetas(); 
});

obtenerRecetas();



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