(function() {
    let DB;
    let idCliente;

    // selecionamos los inputs
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // actualiza el registro
        formulario.addEventListener('submit', actualizarCliente);

        // verificar el id de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');

        if(idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }
    });

    function actualizarCliente(e) {
        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // actulizar cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.oncomplete = function() {
            imprimirAlerta('Se actualizo correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error');
            console.log('Hubo un error al editar');
        }
    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objetcStore = transaction.objectStore('crm');

        const cliente = objetcStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            // no existe como tal un WHERE en IndexedDB, en su lugar usamosun IF
            if(cursor) {
                // comparamos el id de todos los registro con el que recibimos por parametro para filtrarlo
                if(cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                }

                // muestra todos los resultados
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente) {
        const { nombre, email, telefono, empresa } = datosCliente;

        // llenamos los campos del forumulario con el valor
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('hubo un error');
        }

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }
    }
})();