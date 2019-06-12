'use strict'

//Mostrar todos lo números inpares que hay entre dis números introducidos por el usuario. 

//Solución del maestro

var numero1 = parseInt(prompt('Ingrese el primer número'));
var numero2 = parseInt(prompt('Ingrese el segundo número'));

while (numero1 < numero2) {
    numero1++;
    if (numero1 % 2 != 0) {
        document.write(`El ${numero1} es impar <br/>`)
    }
    else { document.write(`El ${numero1} es par <br/>`) }
} 

//Otra alternativa desarrollada por mi

/* var numero1 = parseInt(prompt('Ingrese el primer número'));
var numero2 = parseInt(prompt('Ingrese el segundo número'));

for (var i = numero1; i <= numero2; i++) {
    if (i % 2 != 0) {
        document.write(`El ${i} es impar </br>`)
    }
    else { document.write((`El ${i} es par </br>`)) }
} */