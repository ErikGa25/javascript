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

const producto3 = {
    nombre: "Teclado",
    precion: 100
}

//forma declarativa
let resultado;

// agregar el objeto al array
resultado = [...carrito, producto];
// agregar el objeto al array
resultado = [...resultado, producto2];
// agregar el objeto al array en la primera posición
resultado = [producto3, ...resultado];


console.table(resultado);