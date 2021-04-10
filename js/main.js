const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelector('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* Event Listener para la flecha derecha*/

flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth; /*lo que ya se tiene  mas el ancho del contenedor*/
});


/* Event Listener para la flecha Izquierda*/

flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth; /*lo que ya se tiene  menos el ancho del contenedor*/
});
