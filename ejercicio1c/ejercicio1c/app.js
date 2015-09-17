var fs = require('fs');
var archivo = 'hola.txt';
var archivoJ = 'hola.json';

function lee(file){
    fs.readFile(file, 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        };
    });
};

function lee2(file){
    console.log(fs.readFileSync(file));
};

console.log('lecturas asincronas');
lee(archivo);
lee(archivoJ);

console.log('lectura sincrona');
lee2(archivo);