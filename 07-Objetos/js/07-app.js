//aunque un objeto sea declarado con const se puede sobreescribir sus propiedades

const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false
}

producto.disponible = true;

console.log(producto)