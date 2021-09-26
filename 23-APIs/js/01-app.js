// Notificaciones nátivas

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification // nos solicita permiso para reciibir notificaciones
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado)
         })
})

// const verNotificacionBtn = document.querySelector('#verNotificacion');
// verNotificacionBtn.addEventListener('click', () => {
//     if(Notification.permission == 'granted') {
//         new Notification('Esta es la notificación');
//     }
// })


// Ir mas alla con nuestra notificación...

const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission == 'granted') { // si aceptmos las notificaciones
        const notificacion = new Notification('Esta es la notificación', { // crear la notificación | la podemos personalizar
            icon: 'img/ccj.png',
            body: 'Código con Juan, los mejores tutoriales'
        });

        // Ir al sitio web de juan | puede llevarnos a otro sitio web por medio del evento click - se lo asignamos
        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com')
        }

    }
})