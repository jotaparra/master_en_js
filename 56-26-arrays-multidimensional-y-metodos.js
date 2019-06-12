'use strict'

//Los arrays multidimensionales son array con más array en su interior
var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];

console.log(cine[0][1]); //accedo a la primera dimensión (categorías) y luego a la segunda (peliculas)
//devuelve: Terror
console.log(cine[1][2]);
//devuelve: Comedia

//AÑADIR UN ELEMENTO:
peliculas.push('Batman');
//devuelve: ["La verdad duele", "La vida es bella", "Gran Torino", "Batman"]

//EJERCICIO CON PUSH Y DO WHILE
   /*var elemento= '';

    do{
        elemento = prompt('Introduce tu película');
        peliculas.push(elemento);
    }while(elemento != 'ACABAR');
    console.log(peliculas);


//ELIMINA EL ULTIMO ELEMENTO DEL ARRAY

    peliculas.pop();
    peliculas.pop();
    peliculas.pop();

    console.log(peliculas); */


// SPLICE () : PARA ELIMINAR UN ELEMENTO ESPECIFICO
console.log(peliculas);
var indice = peliculas.indexOf('Gran Torino'); //primero hay que identificar si está el elemento que necesito borrar
if(indice > -1){ //-1 significa que no lo ha encontrado
    peliculas.splice(indice,1) //nos permite en base a un indice, borrar tanto indices como quiera a partir hacia adelante. en este caso solo quiero borrar solo uno
}
console.log(peliculas)


//JOIN () : CONVERTIR UN ARRAY A TEXTO

var peliculasString = peliculas.join();

console.log(peliculasString)


//SPLIT () : CONVERTIR UN STRING A UN ARRAY
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(); //si queremos con separdores lo podemos colocar así: var cadena_array = cadena.split(', ')
console.log(cadena_array);
//["texto1, texto2, texto3"]



//SORT () : ORDENAR ARRAYS
var libros = ['Hamlet', 'Fahrenheit 451', 'El túnel', 'La rebelión de la granja'];
//por default los ordenará por orden alfabético.
libros.sort();
console.log(libros);
//["El túnel", "Fahrenheit 451", "Hamlet", "La rebelión de la granja"]