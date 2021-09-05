const carrito = [];

//definir un producto
const producto = {
    nombre: "Monitor",
    precion: 400
}

const producto2 = {
    nombre: "Celular",
    precion: 800
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto2);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precion: 100
}

carrito.unshift(producto3)

console.table(carrito);

//eliminar ultimo elemento

carrito.pop();

console.table(carrito);


//eliminar primer elemento
carrito.shift();

console.table(carrito);


// eliminar cualquier elemento
carrito.splice(1,1);
console.table(carrito);