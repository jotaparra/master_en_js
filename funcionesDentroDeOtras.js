'use strict'

//Funciones
//Una función es una agrupación reutilizables de un conjunto de instrucciones

//Defino la función

function porConsola(numero1, numero2) {
    console.log('Suma: ' + (numero1 + numero2));
    console.log('Resta: ' + (numero1 - numero2));
    console.log('Multiplicación: ' + (numero1 * numero2));
    console.log('División: ' + (numero1 / numero2));

}
function porPantalla(numero1, numero2) {
    document.write('Suma: ' + (numero1 + numero2) + "<br/>");
    document.write('Resta: ' + (numero1 - numero2) + "<br/>");
    document.write('Multiplicación: ' + (numero1 * numero2) + "<br/>");
    document.write('División: ' + (numero1 / numero2) + "<br/>");
}

function calculadora(numero1, numero2, mostrar = false) {   
    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2)
    }
    return true;           //El return false es para que no se ejecute la acción por defecto del elemento.
}


//invocar o llamar la función
calculadora(1, 7);

calculadora(2, 5, true)