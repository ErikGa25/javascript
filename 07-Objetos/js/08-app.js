//habilitamos el modo estricto, para evitar que se cambien los valores y otras reglas
"use strict";

const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false
}

// este metodo no deja que se modifique el objeto producto de ninguna manera
Object.freeze(producto);

//producto.disponible = true;
//producto.imagen = 'img';

//delete producto.nombre;

console.log(producto)

console.log(Object.isFrozen(producto)) //te inidica si el objeto puede modificarse o no