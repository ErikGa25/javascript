// En este video veamos como obtener lo sdatos de Local storage

// si intentas recuperar algun valor que no existe retorna null
//  localStorage.getItem('noexiste');  = null

const nombre = localStorage.getItem('nombre');
console.log(nombre);

// obtenemos el valor y lo convertimos a un objeto
const productoJSON = localStorage.getItem('productoJSON');
console.log(JSON.parse( productoJSON ));


const meses = JSON.parse( localStorage.getItem('meses'));
console.log(meses);