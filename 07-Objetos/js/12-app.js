// objetc literal
const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false
}

// object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("pantalla", 500);

console.log(producto2)