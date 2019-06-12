'use strict'

//Arrays, Arreglos, Matrices

let nombre = 'Victor Robles';
let nombres = ['Victor Robles', 'Juan Lopez', 'Manolo Garcia', 'José Martin', 52, true];

let lenguajes = new Array('PHP', 'JS', 'Go', 'Java');


//FIND () : Hace una búsqueda dentro de un array

     var busqueda = lenguajes.find((lenguaje)=>{
     return lenguaje == 'PHP';
     });
     console.log(busqueda);
     //devuelve: PHP
     //si buscara algo que no está dentro del array, devuelve 'undefined'

     //o podriamos simplicarla más aún
     
     var busqueda = lenguajes.find(lenguaje=> lenguaje == 'PHP');
     console.log(busqueda);
     //devuelve: PHP



//findIndex () : en vez de devolverme la palabra que busco, me devuelve el índice donde lo ha encontrado dentro del array.
    var busqueda = lenguajes.findIndex(lenguaje=> lenguaje == 'PHP');
    console.log(busqueda);
    //devuelve: 0


// some () : busca que cumplan una condición concreta, como por ejemplo; <, >= , ==, etc.
     var precios = [10, 50, 20, 12, 80];
     var busqueda2 = precios.some(precio=> precio > 80);
     console.log(busqueda2);
     //devuelve: false  -> no hay ningún valor mayor a 80



