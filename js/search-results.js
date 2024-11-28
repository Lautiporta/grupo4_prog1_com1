let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let rec = queryStringObj.get("search");
console.log(rec)
function cargarCategorias(){
    fetch(`https://dummyjson.com/recipes/search?q=${rec}`)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(recetas) {
            let lista = document.querySelector("#resultados");
            for (let i = 0; i < recetas.recipes.length; i++) {
                let rece = `
                    <div class="receta">
                        <a class="subrayado" href="receta.html?id=${recetas.recipes[i].id}">
                            <img src="${recetas.recipes[i].image}" alt="${recetas.recipes[i].name}">
                            <h3>${recetas.recipes[i].name}</h3>
                            <p>Categorías: ${recetas.recipes[i].tags}</p>
                            <p>Dificultad: ${recetas.recipes[i].difficulty}</p> 
                        </a>
                    </div>
                `;
                lista.innerHTML += rece;
            }
        })
        .catch(function(error){
            console.log("El error es: " + error);
        }
        );

    

}
cargarCategorias();