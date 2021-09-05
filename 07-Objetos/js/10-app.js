
const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}
// copia de objetos y unirlos
const resultado = Object.assign(producto, medidas);

// spread operator o rest operator
const resultado2 = {...producto, ...medidas};

console.log(resultado);
console.log(resultado2);