// Existe otra forma de comparar si un valor es verdadero y es por medio de algo llamado un operador ternario

const boolean_1 = true;
const boolean_2 = false;


if(boolean_1) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

//El código anterior es fácil de leer no?, pero se puede simplificar un poco más
console.log( boolean_1  ? 'Si es true' : 'No no es true' )