const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

// con this podemos acceder a los valores del objeto

producto.mostrarInfo();