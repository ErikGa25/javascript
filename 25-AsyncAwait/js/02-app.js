// Async Await 

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout( () => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');
                
            }            
        }, 3000);

    });
}

// Async await | async es para la funcion padre
async function ejecutar() {
    try {
        // detiene la ejecucion de codigo hasta que se resuelva el promise
        const respuesta = await descargarClientes(); // Deten la ejecución hasta que sea ejecutado...
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}
ejecutar();

console.log( 2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta

/*
La palabra async declara una función como asíncrona e indica que una promesa será automáticamente devuelta.

Podemos declarar como async funciones con nombre, anónimas o funciones flecha.

La palabra await debe ser usado siempre dentro de una función declarada como async y esperará de forma asíncrona y no bloqueante a que una promesa se resuelva o rechace.*/