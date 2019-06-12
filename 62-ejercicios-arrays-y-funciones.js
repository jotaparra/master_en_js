'use strict'

/* 1. Pida 6 números por pantalla y los meta en un Array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario, que no diga si lo oencuentra y su indice */

function mostrarArray(elementos, textoCustom = '') {
    document.write(`<h1>Contenido del array ${textoCustom}</h1>`);
    document.write(`<ul>`);
    elementos.forEach((elemento, index) => {          //tiene una función de callback dentro, donde puedo recoger el elemento y el index. El callback lo tengo definido como una función anónima de flecha.
        document.write(`<li> ${elemento} </li>`)
    });
    document.write(`</ul>`);
}


// PEDIR 6 NUMEROS
//primera opción
/* let numeros = new Array(6); //tenemos un array con 6 posiciones

for(let i=0; i<=5; i++){
    numeros[i] = parseInt(prompt('Introduce un número',0));
}
console.log(numeros); */

//Segunda opción con push

let numeros = [];
for (let i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt('Introduce un número', 0)));
}

// MOSTRAR EN EL CUERPO DE LA PAGINA
//Podriamos hacerlo con for, for in, for each, se recomienda utilizar forEach
/* document.write(`<h1>Contenido del array</h1>`);
numeros.forEach((numero, index) => {          //tiene una función de callback dentro, donde puedo recoger el elemento y el index. El callback lo tengo definido como una función anónima de flecha.
    document.write(`<strong> ${numero} </strong><br>`) 
});*/
mostrarArray(numeros);


// MOSTRAR EN LA CONSOLA
console.log(numeros);

//ORDENAR Y MOSTRAR: podemos utilizar el método sort
//numeros.sort();// de esta forma me los muestra de forma alfabética, si queremos que lo ordene númericamente://
numeros.sort(function(a,b){return a-b});

//Para mostrar podriar pegar el bloque de código anterior (forEach), pero es mejor crear una función para poder reutilizarlo.
mostrarArray(numeros, 'ordenado');

//INVERTIR Y MOSTRAR
numeros.reverse();
mostrarArray(numeros, 'invertidos');

//MOSTRAR CUANTOS ELEMENTOS TIENE UN ARRAY: contar índice
document.write(`<h1>El array tiene: ${numeros.length} elementos </h1>`);

//BUSQUEDA DE UN VALOR INTRODUCIDO
let busqueda = parseInt(prompt('Busca un número',0));
let posicion = numeros.findIndex(numero => numero == busqueda);
 
if (posicion /* true */ && posicion != -1){
    document.write(`<h1>ENCONTRADO</h1>`);
    document.write(`<h1>Posición de la búsqueda: ${posicion}</h1>`);
}else{
    document.write(`<h1>NO ENCONTRADO</h1>`)
}

