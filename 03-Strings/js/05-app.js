const cadena1 = 'Hola Mundo ???';

console.log(cadena1);

// .replace para reemplzar
console.log(cadena1.replace('???', '!!'));

// .slice para cortar
console.log(cadena1.slice(0, 8));
console.log(cadena1.slice(2, 1)); // no hace nada

// alternativa a slice 
console.log(cadena1.substring(0, 8));
console.log(cadena1.substring(2, 1)); // invierte los valores

// no regresa la primera letra
console.log(cadena1.charAt(0));