'use strict'

//Tabla de multiplicar de un número introducido por pantalla

var numero = parseInt(prompt('Ingresa un número, 1'));

document.write(`<h2> Tabla de número ${numero}</h2>`);

for (var i = 1; i <= 10; i++) {
    document.write(`${i} x ${numero} = ${numero * i}</br>`)
}

document.write(`<h2> Todas las tablas de multiplicar</h2>`);

for (var t = 1; t <= 10; t++) {
    document.write(`<h3> Tabla del ${t} </h3> </br>`);
    for (var i = 1; i <= 10; i++) {
        document.write(`${t} x ${i} = ${i * t}</br>`)
    }
}