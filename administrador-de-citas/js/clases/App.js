// importamos algunas funciones que necesitamos en esta clase
import { datosCita, nuevaCita, crearBD } from '../funciones.js';
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario,  } from '../selectores.js';

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        mascotaInput.addEventListener('input', datosCita);
        propietarioInput.addEventListener('input', datosCita);
        telefonoInput.addEventListener('input', datosCita);
        fechaInput.addEventListener('input', datosCita);
        horaInput.addEventListener('input', datosCita);
        sintomasInput.addEventListener('input', datosCita);
        // formulario para nuevas citas
        formulario.addEventListener('submit', nuevaCita);

        // crear la BD
        crearBD();
    }
}

export default App;