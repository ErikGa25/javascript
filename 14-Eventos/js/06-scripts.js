// Veamos lo que se conoce como Event Bubbling...

// Event Bubling es cuando presionas en un evento, pero ese evento se propaga por muchos otros dando resultados inesperados

 // tenemos diferentes cards, con información...
//  vamos a crear 3 selectores

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// como todos los elementos estan juntos, se confunde ya que no sabe cual es el correcto
cardDiv.addEventListener('click', e => {
    e.stopPropagation(); // para detener la propagacion del evento
    console.log('click card');
})
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click info');
})

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click titulo');
})