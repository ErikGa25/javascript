const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false,
    informacion: {
        peso: '1kg',
        medida: '1m',
        fabricacion: {
            pais: 'China',
            marca: 'usv'
        }
    }
}

// accedemos a las propiedades
console.log(producto.precio);

console.log(producto.informacion.peso);

console.log(producto.informacion.fabricacion.pais);