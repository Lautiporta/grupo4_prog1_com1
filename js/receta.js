let queryString = location.search;
console.log(queryString);

let urlParams = new URLSearchParams(queryString);
let RecetaId = urlParams.get("id");
console.log(RecetaId);

let RecetaApi = `https://dummyjson.com/recipes/${RecetaId}`;

fetch(RecetaApi)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);

        let Nombrereceta = document.querySelector('.nombreReceta');
        let instrucciones = document.querySelector('.instrucciones');
        let tiempo = document.querySelector('.tiempoCoccion');
        let imagenreceta = document.querySelector('.img-receta');

        Nombrereceta.textContent = data.name;
        instrucciones.textContent += " " + data.instructions;
        tiempo.textContent += " " + data.cookTimeMinutes + " minutos";
        imagenreceta.src = data.image;
        imagenreceta.alt = data.name;

        let categorias = data.tags;
        let categoriasElement = document.querySelector('.categorias');
        categorias.forEach((categoria, index) => {
            let linkElement = document.createElement('a');
            linkElement.href = `categories.html?categoria=${categoria}`;
            linkElement.textContent = categoria;
            categoriasElement.appendChild(linkElement);

            if (index < categorias.length - 1) {
                categoriasElement.innerHTML += ', '; 
            }
        });
    })
    .catch(function (e) {
        console.error("Error al obtener los datos:", e);
    });
