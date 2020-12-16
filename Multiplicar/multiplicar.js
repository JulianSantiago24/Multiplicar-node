const fs = require('fs');
var colors = require('colors');

const { resolve } = require('path');

//Funcion 

let listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i } `);
    }
}



//Se crea una promesa para crear archivo

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';


        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n `;
        };


        fs.writeFile(`tablas/Tabla-del-${ base },hasta-el-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`Tabla-del-${ base },hasta-el-${ limite }.txt`);

        });

    });
}


//Elementos que deseo usar de forma global

module.exports = {
    crearArchivo,
    listarTabla
}