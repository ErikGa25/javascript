// Veamos lo que se conoce como Traversing the DOM

// Todo en JavaScript esta conectado en el document, la forma en que te moverás entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo..


const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

console.log(navegacion.firstElementChild); // te da el primer elemento
console.log(navegacion.lastElementChild); // te da el ultimo elemento

// Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
console.log(navegacion.childNodes);

// también existe algo llamado Children
console.log(navegacion.children)

// La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos...

// Hay mucha información aqui...
console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
console.log(navegacion.children[0].nodeName) // Que etiqueta es...



// Por ejemplo si selecciono el primer card...

const card = document.querySelector('.card');
console.log(card.children[1].children[1]);
console.log(card.children[1].children[1].textContent);
console.log(card.nodeType);
console.log(card.nodeName);

// 1 = Elemento
// 2 - Atributo
// 3 - Text node
// 8 - Commentario
// 9 - Documento
// 10 doctype

// en javascript puedes seleccionar un elemento y navegar en sus diferentes elementos... por ejemplo el card...

// traversing de hijo a padre

console.log(card.parentNode);
console.log(card.parentElement); // esta es mejor


// recorrer entre elementos hermanos
console.log(card.nextElementSibling) // hermano siguiente


const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling); // te muestra el elemento hermano anterior
