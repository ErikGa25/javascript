// Veamos algunos ejemeplos de LocalStorage...

// Local Storage funciona con una especie de Llave valor...
// Local Storage solo soporta strings, no soporta arrays ni objetos pero puedes almacenarlos convirtiendolos a string..
// local storage permite que los valores se mantenga aun despues de cerrar el navegador o apagar tu equipo
localStorage.setItem('nombre', 'Local - ERIK');

// añadir algo a sessionstorage
// los datos persisten mientras no se cierre el navegador
sessionStorage.setItem('nombre', 'Sesión - ERIK');


const producto = {
    nombre: 'Monitor 24"',
    precio: 300
}
// convertimos el objeto en un string para poder almacenarlo
const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);



// Lo mismo con un array
 const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));