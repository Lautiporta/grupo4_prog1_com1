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


