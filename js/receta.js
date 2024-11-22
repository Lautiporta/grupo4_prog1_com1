let queryString = location.search;
console.log(queryString);

let urlParams = new URLSearchParams(queryString);
let RecetaId = urlParams.get("id");
console.log(RecetaId);

let RecetaApi = `https://dummyjson.com/recipes/${RecetaId}`;

// Hacer la solicitud para obtener los datos de la receta
fetch(RecetaApi)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);

        let Nombrereceta = document.querySelector('.name-receta');
        let instrucciones = document.querySelector('.instrucciones');
        let tiempo = document.querySelector('.cook-time');
        let imagenreceta = document.querySelector('.img-receta');

        // Rellenar los datos en la página
        Nombrereceta.textContent = data.name;
        instrucciones.textContent += " " + data.instructions;
        tiempo.textContent += " " + data.cookTimeMinutes + " minutos";
        imagenreceta.src = data.image;
        imagenreceta.alt = data.name;

        // Agregar categorías con enlaces
        let categorias = data.tags;
        let categoriasElement = document.querySelector('.categorias');
        categorias.forEach((categoria, index) => {
            let linkElement = document.createElement('a');
            linkElement.href = `detallecategoria.html?categoria=${categoria}`;
            linkElement.textContent = categoria;
            categoriasElement.appendChild(linkElement);

            if (index < categorias.length - 1) {
                categoriasElement.innerHTML += ', '; // Agrega una coma entre categorías
            }
        });
    })
    .catch(function (e) {
        console.error("Error al obtener los datos:", e);
    });
