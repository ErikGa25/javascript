const carrito = [
    {nombre: 'Monitor 27', precion: 100},
    {nombre: 'Monitor 37', precion: 200},
    {nombre: 'Monitor 47', precion: 300},
    {nombre: 'Monitor 57', precion: 400},
]


for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

carrito.forEach(function(producto) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precion}`);
});