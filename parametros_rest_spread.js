'use strict'

//Parámetros REST y SPREAD

/* function listadoFrutas(frutas1, frutas2){
    document.write("Fruta 1: ", frutas1);
    document.write("Fruta 2: ", frutas2);
}

listadoFrutas('Naranja', 'Manzana'); */

/* Pero que pasa si yo le quiero pasar más frutas como parámetros listadoFrutas('Naranja', 'Manzana', 'melon', 'moras', 'plátano'); // este caso la consola no arroja error, solo arroja las primeras dos frutas y no recoje los demás parámetros.
o no se cuantos frutas más voy a ingresar, entonces podemos ocupar los parámetros rest (poner ...(tres puntos))  */

//REST  => poner 3 puntos delante del parámetro
function listadoFrutas(frutas1, frutas2, ...resto_de_frutas){
    document.write("Fruta 1: ", frutas1 + "</br>");
    document.write("Fruta 2: ", frutas2 + "</br>");
    document.write(resto_de_frutas);  //Esto devolverá un array con los demás elementos que ingresamos como parámetros
}

listadoFrutas('Naranja', 'Manzana', 'Sandía', 'peras', 'moras', 'plátano');