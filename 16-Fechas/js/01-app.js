// En javascript hay un objeto llamado Date
const diaHoy = new Date();
let valor;

// En este momento
Date.now();


// Date es Mes, dia y año
let cumple = new Date('1-5-1987');
cumple = new Date('January 5 1987');



// .toString lo cambiaria de object a string


// Convertir fecha a string

// cumple.toString();
valor = cumple;
console.log(typeof valor)
console.log(valor);

valor = diaHoy.getMonth();
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2018); // modificar le valor de la fecha

console.log(valor);