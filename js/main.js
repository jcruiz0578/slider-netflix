const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula'); /*Obtener todos los elementos*/

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* Event Listener para la flecha derecha*/

flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth; /*lo que ya se tiene  mas el ancho del contenedor*/

  // accedo al indicador activo
  const indicadorActivo = document.querySelector('.indicadores .activo');

  // si tiene elemento a la derecha?
  if(indicadorActivo.nextSibling){
    // si hay elemento lo colocamos activo
    indicadorActivo.nextSibling.classList.add('activo');

    // al indicador que estaba activo se le quita
    indicadorActivo.classList.remove('activo');

  }


});


/* Event Listener para la flecha Izquierda*/

flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth; /*lo que ya se tiene  menos el ancho del contenedor*/

  const indicadorActivo = document.querySelector('.indicadores .activo');

  // si tiene elemento a la Izquierda?
  if(indicadorActivo.previousSibling){
    // si hay elemento lo colocamos activo
    indicadorActivo.previousSibling.classList.add('activo');

    // al indicador que estaba activo se le quita
    indicadorActivo.classList.remove('activo');

  }





});


/*   -----------PAGINACIÓN-------------------  */

const numeroPaginas = Math.ceil(peliculas.length / 5);  /* se redondea hacia arriba, calculo la cantida de peliculas entre las q quiero mostrar*/

/*por cada pagina se crea un boton  y se agrega al html en la clase .indicador*/

for (let i = 0; i < numeroPaginas; i++){
  const indicador = document.createElement('button');

  if(i===0){
    indicador.classList.add('activo'); /*al recargar la pagina el primero este activo*/
  }

  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth; // mover el scroll

    /*Para colocar que indicador esta activo*/

    document.querySelector('.indicadores .activo').classList.remove('activo'); // se remueve el que esta activo
    e.target.classList.add('activo'); // y la pagina que esta en ese pomento seleccionadas se activa

  });


}


/* --- Hover  de las imagenes de peliculas con js */

peliculas.forEach((pelicula) => {

  // cuando se pase el cursor pór la imagen
  pelicula.addEventListener('mouseenter', (e) => {

    // se almacena el elemento a quien se paso el mouse
    const elemento = e.currentTarget;

    setTimeout(() => {
      //para que al pasar el puntero por otra a las demas se les elimine el hover
      peliculas.forEach(pelicula => pelicula.classList.remove('hover'));

      // al elemento al que se le pasa el mouse se le coloca el hover
      elemento.classList.add('hover');

    }, 300);

  });
});

// detectar cuando se saque el cursor de la fila

fila.addEventListener('mouseleave', () => {
  //para que al pasar el puntero por otra a las demas se les elimine el hover
  peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
