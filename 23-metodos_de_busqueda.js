'use strict'

//Transformación de textos
var numero = 444;
var texto1 = 'Bienvenido al curso de JavaScript de Victor Robles';
var texto2 = 'es muy buen curso';

//INDEXOF
var busqueda = texto1.indexOf('curso') //hace una búsqueda dentro del string, lo que hace es encontrar la primera coincidencia de la palabra y devuelve el índice donde empieza.
console.log(busqueda);
// devuelve 14


//LASTINDEXOF
var busqueda2 = texto1.lastIndexOf('curso') //Encuentra la última coincidencia y devuelve el índice donde lo encontró
console.log(busqueda2);
// devuelve 14

//SEARCH
var busqueda3 = texto1.search('curso'); //Hace lo mismo que el indexOf
console.log(busqueda3);
// devuelve 14

//si la palabra o carácter que buscan estos métodos no coinciden con ninguna, devuelve -1.


//MATCH
var busqueda4 = texto1.match('curso');                                     //devuelve un array con el primer resultado que encuentre
console.log(busqueda4);
/*["curso", index: 14, input: "Bienvenido al curso de JavaScript 
de Victor Robles", groups: undefined]*/

//para que me devuelva todas las coincidencias hay que colocarlos entre expresiones regulares


var busqueda5 = texto1.match(/curso/g);   //g= global
console.log('match: ' + busqueda5);
// ['curso']

//SUBSTR
var busqueda6 = texto1.substr(14,5);     //que me extraiga desde el carácter 14, 5 letras hacia adelante
console.log('substr: ' + busqueda6);
//devuelve: curso


//CHARAT
var busqueda7 = texto1.charAt(44);         //para extraer una letra especifica
console.log('charAt: ' + busqueda7);
//devuelve: R


//STARTSWITH
var busqueda8 = texto1.startsWith('Bienvenido');   //Para verificar si comienza con la letra o palabra especifica, devuelve true o false.
console.log(busqueda8);
//devuelve: true

//INCLUDES
var busqueda9 = texto1.includes('JavaScript');   //Encontrar la palabra ingresada dentro del texto, devuelve true o false
console.log('includes: ' + busqueda9);
//devuelve: true

