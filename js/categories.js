
let url = "https://dummyjson.com/recipes/tags"; 


fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(tags) {
    console.log(tags);
    let seccion = document.querySelector(".containerArticles");
    let allTagsHTML = ""; 
    for (let i = 0; i < tags.length; i++) {
      allTagsHTML += `
        <article class="articleCategorias">
          <div class="divCategories">
            <h2 ><a class="Categoria" href="category.html?tag=${tags[i]}">${tags[i]}</a></h2>
            <p class="Categoria">Descubre recetas relacionadas con esta categoría.</p>
          </div>
        </article>
      `;
    }
    seccion.innerHTML = allTagsHTML;
  })
  .catch(function(e) {
    console.log("Error:", e);
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