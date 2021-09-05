const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false,
    imagen: 'imagen.jpg'
}

// agregar nuevas propiedades al objeto
producto.descripcion = 'Este es un texto';

//eliminar propiedad
delete producto.disponible;

console.log(producto)

