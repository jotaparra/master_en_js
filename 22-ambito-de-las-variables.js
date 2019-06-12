'use strict'

function holaMundo(texto){
    console.log(texto);
    console.log(numero); // que pasa si yo quisiera hacer esta variable dentro de la función, por ejem´plo un console.log . Podría haverlo?
    //si funciona llamar una variable global ((numero)que está afuera de la función)
    //pro que pasa si yo defino una variable dentr o de mi función
    var hola_mundo = 'texto dentro de función' // si yo hago esto yo puedo acceder dentro del ambito de esta función y hacer un console.log ya que es una variable local
}

var numero = 12;
var texto = 'Holi soy una variable global';
holaMundo(texto);

//pero que pasa si yo quiero llamar la variable fuera de la función
console.log(hola_mundo) // no funciona, porque la variable hola_mundo no está definida dentro del ámbito global sino local.

//tips: convertir un número a un string con método toString

console.log(numero.toString());

//Para comprobar si el tipo de dato

console.log(typeof numero.toString());