const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false
}

// obtenemos las llaves del objeto
console.log(Object.keys(producto));

// retorna los valores del objeto
console.log(Object.values(producto));

// retorna llaves y valores
console.log(Object.entries(producto))