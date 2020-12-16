//Yargs

const argv = require('./Config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}