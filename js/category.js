
let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
let categoria = urlParams.get("tag"); 

console.log("Categoría seleccionada:", categoria);


let categoryTitle = document.getElementById("category-title");
categoryTitle.textContent = `Categoría: ${categoria}`;


let url = "https://dummyjson.com/recipes";


fetch(url)
  .then(function (res) {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(function (data) {
    console.log(data); 
    let recetas = data.recipes || [];
    let recetasFiltradas = recetas.filter((receta) =>
      receta.tags.includes(categoria)
    );
    let container = document.querySelector(".containerCategory");
    if (recetasFiltradas.length === 0) {
      container.innerHTML = "<p>No se encontraron recetas para esta categoría.</p>";
      return;
    }

    
    let recipesHTML = recetasFiltradas
      .map((receta) => {
        return `
          <article class="articleCategory">
          
          <img src="${receta.image}" alt="${receta.name}" >
          
            <h2 class="Categoria" >${receta.name}</h2>
            <p class="Categoria">Dificultad: ${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}" class="Categoria">Ver receta</a>
          </article>
        `;
      })
      .join("");

    
    container.innerHTML = recipesHTML;
  })
  .catch(function (e) {
    console.error("Error al cargar las recetas:", e);
    let container = document.querySelector(".container-recipes");
    container.innerHTML = "<p>Error al cargar las recetas. Intenta nuevamente más tarde.</p>";
  });

