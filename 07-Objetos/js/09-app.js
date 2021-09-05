//habilitamos el modo estricto, para evitar que se cambien los valores y otras reglas
"use strict";

const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false
}

// deja que se modifiquen las propiedas que ya existen, pero no permite agregar nuevas ni eliminarlas
Object.seal(producto);

producto.disponible = true;
//producto.imagen = 'img';

//delete producto.nombre;

console.log(producto)

console.log(Object.isSealed(producto)) //te inidica si el objeto puede agregarse o eliminarse algo