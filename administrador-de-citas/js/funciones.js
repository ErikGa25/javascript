// importamos algunos elemetos que necesitan estas funciones
import Citas from './clases/Citas.js';
import UI from './clases/UI.js';
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from './selectores.js';

// instancias de las clases
const ui = new UI();
const administrarCitas = new Citas();


export let DB;

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
        // pasar el objeto de la cita a la edición
        administrarCitas.editarCita({...citaObj});


        // edita en el indexedDB
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');

        // este metodo nos permite editar
        objectStore.put(citaObj);

        transaction.oncomplete = function() {
            ui.imprimirAlerta('Editado correctamente');

            // cambiar el texto del botón al original
            formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

            // quitar modo edición
            editando = false;
        }

        transaction.onerror = function() {
            console.log('Hubo un error al editar');
        }
    } else {
        // generar un id unico
        citaObj.id = Date.now();

        // creando una nueva cita
        administrarCitas.agregarCita({...citaObj});

        //  insertar registro en indexedDB
        const transaction = DB.transaction(['citas'], 'readwrite');

        // habilitar el objetStore
        const objectStore = transaction.objectStore('citas');

        // insertar en la BD
        objectStore.add(citaObj);

        transaction.oncomplete = function() {
            console.log('cita agregada');
            
            // mensaje de agregado correctamente
            ui.imprimirAlerta('Se agregó correctamente');
        }
    }

    // reinicia el objeto para la validacion
    reiniciarObjeto();

    //reinicia el formulario
    formulario.reset();

    // mostrar las citas en el HTML
    ui.imprimirCitas();
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
    // eliminar la cita | codigo anterior
    //administrarCitas.eliminarCita(id);

    const transaction = DB.transaction(['citas'], 'readwrite');
    const objectStore = transaction.objectStore('citas');

    // funcion para eliminar de la DB indexed
    objectStore.delete(id);

    transaction.oncomplete = () => {
        console.log(`Cita ${id} eliminado..`);

        // muestre un mensaje
        ui.imprimirAlerta('La cita se elimino correctamente');

        // refrescar las citas
        ui.imprimirCitas()
    }

    transaction.onerror = () => {
        console.log('Hubo un error al tratar de eliminar un registro');
    }
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

export function crearBD() {
    // crea la version 1.0
    const crearBD = window.indexedDB.open('citas', 1);

    // si hay un error
    crearBD.onerror = function() {
        console.log('hubo un error');
    }

    // si todo sale bien
    crearBD.onsuccess = function() {
        console.log('BD creada');

        DB = crearBD.result;

        // mostrar citas al cargar (Pero indexed DB ya esta lista)
        ui.imprimirCitas();
    }

    // definir el schema
    crearBD.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });

        // definir todas las columnas
        objectStore.createIndex('mascota', 'mascota', {unique: false});
        objectStore.createIndex('propietario', 'propietario', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('fecha', 'fecha', {unique: false});
        objectStore.createIndex('hora', 'hora', {unique: false});
        objectStore.createIndex('sintomas', 'sintomas', {unique: false});
        objectStore.createIndex('id', 'id', {unique: true});

        console.log('db creada y lista');
    }
}