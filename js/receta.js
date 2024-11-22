
let queryString = location.search;
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
let RecetaId = urlParams.get("id");
console.log(RecetaId);

{
    
    let RecetaApi = `https://dummyjson.com/recipes/${RecetaId}`;

    // Hacer la solicitud para obtener los datos del personaje
    fetch(RecetaApi)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);

            let Nombrereceta = document.querySelector('.name-receta');
            let instrucciones = document.querySelector('.instrucciones');
            let tiempo = document.querySelector('.cook-time');
            let imagenreceta = document.querySelector('.img-receta');
            let categorias = document.querySelector('.category-list');

            // Rellenar los datos en la página
            Nombrereceta.textContent = data.name;
            instrucciones.textContent += " " + data.instructions;
            tiempo.textContent += " " + data.cookTimeMinutes + " minutos";
            imagenreceta.src = data.image;
            imagenreceta.alt = data.name;

           
            data.category.forEach(function (category) {
                let li = document.createElement('li');
                let link = document.createElement('a');
                link.href = `categoria.html?category=${category}`;
                link.textContent = category;
                li.appendChild(link);
                categorias.appendChild(li);
            });
        })
        .catch(function (e) {
            console.error("Error al obtener los datos:", e);
        });
      }