const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false,
    imagen: 'imagen.jpg'
}


// destructuring objects
// nos permite extraer valores del objeto y crear una variable al mismo tiempo
const {nombre, imagen} = producto;

console.log(nombre);
console.log(imagen);