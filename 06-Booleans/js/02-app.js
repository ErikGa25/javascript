// Comparar booleans es exactamente igual que cualquier comparación de números o strings

const bool1 = true;
const bool2 = false;

console.log(bool1 === bool2); // comparar 2 variables

console.log(bool1 === true); // comparar si un boolean es verdadero
console.log(bool2 === true);// comparar si un boolean es verdadero

// Aún no hemos llegado a ello, pero muchas personas cometen el siguiente error cuando escriben código javascript en un if

if(bool1 === true) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

// Pero este código se puede simplificar quitando el === true porque ya sabemos que la variable es true

// Este mismo ejemplo aplica si un usuario esta autenticado puede darle me gusta a una foto o ver una página, así como si ya tienes una cuenta en netflix y has pagado 