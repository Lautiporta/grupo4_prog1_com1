let api = 'https://dummyjson.com/recipes';
let cantidadRecetas = 0; 

function obtenerRecetas() {
    fetch(api)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data.recipes); 

            
            let arrayDeRecetas = data.recipes;
            let seccion = document.querySelector('.container1');
            let allRecipesHTML = ""; 

            for (let i = cantidadRecetas; i < cantidadRecetas + 10 && i < arrayDeRecetas.length; i++) {
                allRecipesHTML += `<article class="product-card">
                                    <div class="product-details">
                                        <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}">
                                        <p class="receta-name">${arrayDeRecetas[i].name}</p>
                                        <p>Dificultad: ${arrayDeRecetas[i].difficulty}</p>
                                    </div>
                                    <div class="product-actions">
                                        <a href="detallereceta.html?id=${arrayDeRecetas[i].id}">Detalle</a>
                                    </div>
                                  </article>`;
            }

            
            seccion.innerHTML += allRecipesHTML;

            
            cantidadRecetas += 10;
        })
        .catch(function(e) {
            console.log("Error:", e);
        });
}


document.querySelector('.add-more').addEventListener('click', function(e) {
    e.preventDefault(); 
    obtenerRecetas(); 
});


obtenerRecetas();


  
  