'use strict'

//Arrays, Arreglos, Matrices

let nombre = 'Victor Robles';
let nombres = ['Victor Robles', 'Juan Lopez', 'Manolo Garcia', 'José Martin', 52, true];

let lenguajes = new Array('PHP', 'JS', 'Go', 'Java');

//EJERCICIO 1
/* let elemento = parseInt(prompt('Qué elemento del array quieres?', 0));
if(elemento >= nombres.length){
    alert('Introduce el número correcto menor que' + nombres.length)
}else{
    alert('El usuario seleccionado es: ' + nombres[elemento]);
} */


//EJERCICIO 2
/* Bucle para ir mostrando todos los elementos de un array */

/* document.write('<h2>Lenguajes de programación del 2018</h1>');
document.write('<ul>');

for(let i = 0; i <lenguajes.length; i++){
    document.write('<li>' + lenguajes[i] + '</li>')
}

document.write('</ul>'); */


//FOR EACH -- Recorre el array y nos lo muestra, es una opción más limpia que el for
/* document.write('<ul>'); */

/* lenguajes.forEach((elemento, indice, data) =>{     //parámetros: 1-elemento que estoy recorriendo. 2- el índice. 3- data, es en este caso el array original 
    document.write('<li>' + indice + ' - ' + elemento+ '</li>' )
}); */
//en este caso incluso podríamos prescindir del parámetro 2 y 3 y de todas formas funcionaría.
/* document.write('</ul>'); */



//FOR IN -- otra forma de recorrer un array
//creamos una variable en este caso 'lenguaje' y que recorra el array lenguajes

for(let lenguaje in lenguajes){
    document.write('<li>'+ lenguajes[lenguaje] + '</li>');
}



