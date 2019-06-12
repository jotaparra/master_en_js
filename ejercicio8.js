'use strict'

//Calculadora que:
/* - Pida dos numeros por pantalla
- si introducimos uno mal que nos vuelva a pedir 
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, 
- restar, multiplicar y dividir esas dos cifras */

//METODO DEL MAESTRO
var numero1 = parseInt(prompt('Ingresa el primer número', 0));
var numero2 = parseInt(prompt('Ingresa el segundo número', 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    alert('Ingrese número válidos');
    var numero1 = parseInt(prompt('Ingresa el primer número', 0));
    var numero2 = parseInt(prompt('Ingresa el segundo número', 0));
}

var resultado = `<h3>Números elegidos: ${numero1} y ${numero2}</h3> </br>
                La suma es: ${numero1 + numero2} </br>
                La resta es: ${numero1 - numero2} </br>
                La multiplicación es: ${numero1 * numero2} </br>
                La división es: ${numero1 / numero2} </br>`;


var resultadoCMD = `Números elegidos: ${numero1} y ${numero2}\n
                La suma es: ${numero1 + numero2} \n
                La resta es: ${numero1 - numero2} \n
                La multiplicación es: ${numero1 * numero2} \n
                La división es: ${numero1 / numero2} \n`;


document.write(resultado);
console.log(resultadoCMD);
alert(resultadoCMD);




//METODO ALTERNATIVO HECHO BY MYSELF

/* var numero1 = parseInt(prompt('Ingresa el primer número', 0));
var numero2 = parseInt(prompt('Ingresa el segundo número', 0));

if (isNaN(numero1) || isNaN(numero2) || numero1<0 || numero2<0 ){
    alert('Ingrese número válidos')
}else{ var resultado = `<h3>Números elegidos: ${numero1} y ${numero2}</h3> </br>
La suma es: ${numero1+numero2} </br>
La resta es: ${numero1-numero2} </br>
La multiplicación es: ${numero1*numero2} </br>
La división es: ${numero1/numero2}`;
}
document.write(resultado); */