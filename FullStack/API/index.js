/**
 * agregar este codigo en : node_modules/whatwg-url/dist/encondig.js, al principio
 *  var util= require('util');
    const utf8Encoder = new util.TextEncoder();
    const utf8Decoder = new util.TextDecoder("utf-8", { ignoreBOM: true });
 */


const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear el servidor
const app = express();

// Habilitar Cors | con solo desde este dominio se puede ver la informacion
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) =>  {
        // console.log(origin);
        const existe = whitelist.some( dominio => dominio === origin);
        if ( existe ) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido por CORS'))
        }
    }
}

// habilitar cors
// app.use( cors(corsOptions) );
app.use(cors());

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes())


// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})