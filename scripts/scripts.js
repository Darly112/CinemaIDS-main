import { carta } from "../JS/Prueba.js";

crearCartas();

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');

    if (window.scrollY > 90) { // Cambia 100 por la cantidad de desplazamiento que desees
        navbar.style.backgroundColor = 'rgb(31,31,32)'; // Cambia 'tu-nuevo-color' al color deseado
    } else {
        navbar.style.backgroundColor = 'transparent'; // Vuelve al color transparente inicial
    }
});
function crearCartas(){
    const contenedor = document.getElementById('contain-populares');
    const carta1 = carta('https://imgs.search.brave.com/3xqznd66WZCGZazRfWQnGIzy21LHJhgs0UoNS9mi6Y8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9oZW5y/eS1jYXZpbGwtc3Vw/ZXJtYW4tNjRlNWY0/NDU1ODQ3Ny5qcGc_/Y3JvcD0wLjYyN3h3/OjEuMDB4aDswLjE4/MXh3LDAmcmVzaXpl/PTM2MDoq')
    contenedor.appendChild(carta1);
}

function crearPopulares() {
  fetch("http://127.0.0.1:5000/soloseries")
    .then((response) => response.json())
    .then((data) => {
      const catalogo = document.getElementById("v-peli");
      data.forEach((item) => {
        const carta = crearCards(
          item.url,
          item.nombre,
          item.ranking,
          item.descripcion
        );
        catalogo.appendChild(carta);
      });
    })
    .catch((error) => console.error("Error:", error));
}