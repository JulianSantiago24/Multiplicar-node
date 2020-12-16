//requireds >> hay 3 tipos, estos los encontre en Node.org>>DOCS

const fs = require('fs'); //Propio, solo se define al libreria y no hay que hacer nada mas
// const fs = require('express'); //Paquetes no nativos de Node, codigos de otras personas
// const fs = require('./path'); //Nosotros los creamos en el proyecto

let base = 5;
let data = ''; //Se declara para poner una varibale donde guardar los datos

//Tarea imprimir en consola 
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6...


for (let i = 1; i <= 10; i++) {
    //console.log(`${ base } * ${ i } = ${ base * i }`);  Este se modifico para poder guardar los datos en "data"
    data += `${ base } * ${ i } = ${ base * i }\n `; //+= para concatenar todo con la variable data
};

//El siguiente codigo lo copie de node.org en writeFile

fs.writeFile(`tablas/Tabla-${ base }.txt`, data, (err) => { //se pone tablas/... para gaurdar el archivo en el folder "tablas"

    if (err) throw err;

    console.log(`El archivo "Tabla-${ base }.txt" ha sido creado`);
});