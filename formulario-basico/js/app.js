// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

 // expresion regular para validar email
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos de formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //formulario
    formulario.addEventListener('submit', enviarEmail);

    // reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);
}

// funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// valida el formulario 
function validarFormulario(e) {

    // verificamos si los campos tienen algo
    if(e.target.value.length > 0) {
        // eliminar mensaje de error
        const error = document.querySelector('p.error');
        if(error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        // si los campos estan vacios mandamos un mensaje
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email') {
        if(er.test(e.target.value)) {
             // eliminar mensaje de error
            const error = document.querySelector('p.error');
            if(error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('El email no es valido');
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    // podemos comprobar si hay algun elemento, ya que retorna una coleccion de elementos = []
    const errores = document.querySelectorAll('.error');

    console.log(errores)

    // cargamos el mensaje al final de formulario
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

// envia un email
function enviarEmail(e) {
    e.preventDefault();

    console.log('sdsadsa')

    // mostramos el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // después de 3 segundos ocultar el spinner
    setTimeout(() => {
        spinner.style.display = 'none';

        // mensaje que dice que se envió correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        // inserta el pparafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 5000);
    }, 3000);
}

// funcion para limpiar los campos
function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}