'use strict'

//Un programa que nos diga si un número es par o impar.

var numero1 = parseInt(prompt('Ingrese un número'));
 
if(numero1%2 == 0){
    document.write(`El número ${numero1} es par`)}
    else{document.write(`El número ${numero1} es impar`)
}
