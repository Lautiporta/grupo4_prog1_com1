
let url = "https://dummyjson.com/recipes/tags"; 


fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(tags) {
    console.log(tags);

    
    let seccion = document.querySelector(".container-tags");
    let allTagsHTML = ""; 

    
    for (let i = 0; i < tags.length; i++) {
      allTagsHTML += `
        <article class="tag-card">
          <div class="divCategories">
            <h2 class="Categoria"><a href="category.html?tag=${tags[i]}">${tags[i]}</a></h2>
            <p>Descubre recetas relacionadas con esta categoría.</p>
          </div>
        </article>
      `;
    }


    seccion.innerHTML = allTagsHTML;

    
  })
  .catch(function(e) {
    console.log("Error:", e);
  });