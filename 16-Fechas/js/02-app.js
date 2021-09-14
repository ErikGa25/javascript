// MomentJS
const diaHoy = new Date();
moment.locale('es');  // fechas en español

// nos permite formatear la fecha (Mes - Dia- Año)
console.log(  moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy) );


// le agregamos 3 dias a la fecha actual
console.log ( moment().add(3, 'days').calendar() );

console.log( moment().format('LLLL', diaHoy) )