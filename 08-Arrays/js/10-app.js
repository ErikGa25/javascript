const carrito = [
    {nombre: 'Monitor 27', precion: 100},
    {nombre: 'Monitor 37', precion: 200},
    {nombre: 'Monitor 47', precion: 300},
    {nombre: 'Monitor 57', precion: 400},
]

// no crea un arreglo nuevo / NO se puede asignar a una variable
carrito.forEach(function(producto) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precion}`);
});

// map crea un arreglo nuevo / se puede asignar a una variable
carrito.map(function(producto) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precion}`);
});