'use strict'

//Mostrar todos los números divisores de un número introducidos por el usuario

let numero = parseInt(prompt('Ingresa un número y sabrás todos sus divisores', 1));
//un numero es divisor de otro número cuando al dividirlo entre sí, te da de resto 0

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        document.write(`Divisor: ${i}</br>`)
    }

}