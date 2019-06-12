'use strict'

/* Hacer un programa que muestre todos lo números entre dos números introducidos por el usuario*/

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

document.write(`<h1>De ${numero1} a ${numero2} están los números: </h1>`);
for(var i = numero1 + 1; i <= numero2 - 1; i++){  /* --> le agrugué el +1 y el -1 para que no muestre los números que ingresó el usuario, sino solo los que están entre ellos */
   document.write(`${i} <br/>`);
}