const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//agregar al final del arreglo
meses.push('Julio');
meses.push('Agosto');

console.log(meses);


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

const producto3 = {
    nombre: "Teclado",
    precion: 100
}

carrito.unshift(producto3)

console.table(carrito);