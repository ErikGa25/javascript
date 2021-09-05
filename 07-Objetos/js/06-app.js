const producto = {
    nombre: 'Monitor de 20',
    precio: 300,
    disponible: false,
    informacion: {
        peso: '1kg',
        medida: '1m',
        fabricacion: {
            pais: 'China',
            marca: 'usv'
        }
    }
}


// accedemos a las propiedades con destructuring
const { nombre, informacion: { fabricacion: { pais } } } = producto

console.log(nombre)
console.log(pais)