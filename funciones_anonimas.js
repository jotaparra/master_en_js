'use strict'

//FUNCIONES ANONIMAS: 
/* es una función que no tiene nombre, es decir, que ese conjunto de intrucciones no va a tener ningún nombre y yo 
lo puedo guardar dentro de una variable, de forma que esto se suele utilizar muchísimo en JS, en muchas librerías y en muchas cosas,
pero sobretodo se utiliza para hacer callbacks => es una función que se ejecuta dentro de otra por decirlo de una manera sencilla. */


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7, function(dato){
    console.log('La suma es:' + dato);
},
function(dato){
    console.log('La suma por dos es:' + (dato*2));
});



