const producto = {
    nombre: 'Monitor',
    precio: 400,
    disponible: true
}

const {nombre} = producto;

console.log(nombre)


//destructuring con arreglos

const numeros = [10,20,30,40];

// puede ser el nombre que sea, esta definido por la posicion
const [primero, , , cuarto] = numeros;

const [uno, ...resto] = numeros;

console.log(primero)
console.log(cuarto)

console.log(resto)