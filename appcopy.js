//Este codigo se basa en app.js y trabaja con el codigo Multiplicar

const { crearArchivo } = require('./Multiplicar/multiplicar'); //Se uso destructuracion

// let base = '5';

//Ahora quiero poner la base desde la linea de comando, por eso la comentamos en la linea anterior y se pone lo siguiente

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]

//En el shell, para ejecutar se pone "node appcopy --base=5"

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(err => console.log(err));