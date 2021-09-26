(function(){
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    

    function validarCliente(e) {
        e.preventDefault();

        // leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // crear un objeto con la información
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        cliente.id = Date.now()

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objetcStore = transaction.objectStore('crm');

        objetcStore.add(cliente);

        transaction.onerror = function() {
            console.log('hubo un error en la transaccion');
            imprimirAlerta('Error al agregar el cliente');
        }

        transaction.oncomplete = function() {
            console.log('Cliente agregado');
            imprimirAlerta('El cliente se agregó correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
    }

})();