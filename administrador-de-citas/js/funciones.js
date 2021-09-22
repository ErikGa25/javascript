// importamos algunos elemetos que necesitan estas funciones
import Citas from './clases/Citas.js';
import UI from './clases/UI.js';
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from './selectores.js';

// instancias de las clases
const ui = new UI();
const administrarCitas = new Citas();

// para verificar si se esta creadon o editanto una cita
let editando;

// objeto con información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// agregar datos al objeto de cita
export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

// valida y agrega una nueva cita a la clase de citas
export function nuevaCita(e) {
    e.preventDefault();

    // extrae la información de la cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando) {
        ui.imprimirAlerta('Editado correctamente');

        // pasar el objeto de la cita a la edición
        administrarCitas.editarCita({...citaObj});

        // cambiar el texto del botón al original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        // quitar modo edición
        editando = false;
    } else {
        // generar un id unico
        citaObj.id = Date.now();

        // creando una nueva cita
        administrarCitas.agregarCita({...citaObj});

        // mensaje de agregado correctamente
        ui.imprimirAlerta('Se agregó correctamente');
    }

    // reinicia el objeto para la validacion
    reiniciarObjeto();

    //reinicia el formulario
    formulario.reset();

    // mostrar las citas en el HTML
    ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

export function eliminarCita(id) {
    // eliminar la cita
    administrarCitas.eliminarCita(id);

    // muestre un mensaje
    ui.imprimirAlerta('La cita se elimino correctamente');

    // refrescar las citas
    ui.imprimirCitas(administrarCitas)
}

// función carga los datos y el modo edición
export function cargarEdicion(cita) {
    // extrae la información de la cita
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // cambiar el texto del botón
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}