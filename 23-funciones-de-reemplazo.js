var numero = 444;
var texto1 = 'Bienvenido al curso de JavaScript de Victor Robles';
var texto2 = 'es muy buen curso';

//REPLACE

var busqueda = texto1.replace('JavaScript','Symfony');  //Halla un emparejamiento del texto ingresado (primer parámetro) y la reemplaza por la segunda cadena ingresada (segundo parámetro)
console.log('replace: ' + busqueda);
// "Bienvenido al curso de Symfony de Victor Robles"


//SLICE
var busqueda2 = texto1.slice(14); //Nos corta el string a partir del caracter que le indique y nos devuelve la variable con el texto que no fue cortado
console.log('slice: ' + busqueda2);
//devuelve: curso de JavaScript de Victor Robles
//tb podría indicar hasta que índice quiero cortar. var busqueda2 = texto1.slice(14,22)  //devuelve 'curso de'


//SPLIT
var busqueda3 = texto1.split();                                                 //corta las palabras y crea una colección de elementos dentro de un array
console.log(busqueda3);
//devuelve: ['Bienvenido al curso de JavaScript de Victor Robles'];


//también podría indicar algún separador entre palabras, por ejemplo:
var busqueda4 = texto1.split(" ");  //corta las palabras, las mete en un array y las separa con el carácter que le indico, en este caso con ' '
console.log('split: ' + busqueda4);
//['Bienvenido', 'al', 'curso', 'de', 'JavaScript', 'de', 'Victor', 'Robles'];


//TRIM
var busqueda5 = texto1.trim();    //quita los espacios por delante y por dentrás que tenga mi string
console.log(busqueda5);
//ejemplo tengo: '   Bienvenido al curso de JavaScript de Victor Robles   '
//devuelve: 'Bienvenido al curso de JavaScript de Victor Robles'