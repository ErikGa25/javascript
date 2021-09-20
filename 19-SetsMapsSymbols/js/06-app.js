
// Iterators | funcion que retorna una funcion
function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            // numero de elementos que se van a iterar
            let fin = (i >= carrito.length);
            // valor de los elementos
            let valor = !fin ? carrito[i++] : undefined;

            return {
                fin: fin,
                valor: valor
            };
        }
    };
}
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// utiliza el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );