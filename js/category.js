
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let tag = queryStringObj.get("tag");
console.log(tag)
function cargarCategorias(){
    fetch(`https://dummyjson.com/recipes/search?q=${tag}`)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(recetas) {
          console.log(recetas);
            let lista = document.querySelector("#containerCategory");
            if (recetas && recetas.recipes && recetas.recipes.length > 0) {
              lista.innerHTML = '';

              for (let i = 0; i < recetas.recipes.length; i++) {
                  let rece = `
                      <article class="articleCategory">
                          <img src="${recetas.recipes[i].image}" alt="${recetas.recipes[i].name}" >
                          <h2 class="Categoria">${recetas.recipes[i].name}</h2>
                          <p class="Categoria">Dificultad: ${recetas.recipes[i].difficulty}</p>
                          <a href="receta.html?id=${recetas.recipes[i].id}" class="Categoria">Ver receta</a>
                      </article>
                  `;
                  lista.innerHTML += rece;
            }
        }})
        .catch(function(error){
            console.log("El error es: " + error);
        }
        )};
cargarCategorias()

