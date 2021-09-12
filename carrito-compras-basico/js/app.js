//Variables
const carrito = document.querySelector('#carrito'),
      contenerdorCarrito = document.querySelector('#lista-carrito tbody'),
      vaciarCarritoBtn = document.querySelector('#vaciar-carrito'),
      listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = []; // para los elementos que se vayan agregando al carrito

// llamada de la función
cargarEventListeners();

function cargarEventListeners() {
    // se ejecuta cuando agregas un curso preionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', ()=> {
        articulosCarrito = []; // reseteamos el arreglo
        limpiarHTML(); // limpiamos el html
    });
}

//funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// funcion para eliminar elementos del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); // itera sobre el carrito y mostrar su HTML
    }
}

// lee el contenido del HTML al que le dimos click y extrae su información
function leerDatosCurso(curso) {
    // crear objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if(existe) {
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // agregar elementos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);

    carritoHTML();
}

// muestra el carrito de compras HTML
function carritoHTML() {
    //limpiar html, para que no se repitan los elementos
    limpiarHTML();

    // recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // agregar el HTML al tbody
        contenerdorCarrito.appendChild(row);
    });
}

//elimina los curso del tbody
function limpiarHTML() {
    // forma lenta
    //contenerdorCarrito.innerHTML = '';

    // verificamos que existan elementos dentro del tbody
    while(contenerdorCarrito.firstChild) {
        contenerdorCarrito.removeChild(contenerdorCarrito.firstChild); // eliminamos el elemento
    }
}