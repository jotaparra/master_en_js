'use strict'

/* Programa que pida 2 números y que nos diga cuál es el mayor, el menor y si son iguales 
PLUS: que si los número no son números o son números negativos, nos vuelva a pedir que introduzcamos los números.*/

let numero1 = parseInt(prompt('Introduce el primer número', 0));
let numero2 = parseInt(prompt('Introduce el segundo número', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){       /*  -->isNaN(parametro) comprueba si el parametro es NaN, devuelve TRUE o FALSE */
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));
}

if(numero1 == numero2){
    alert('Los números son iguales');
}else if(numero1 > numero2){
    alert(`El número mayor es: ${numero1}`);
    alert(`El número menor es: ${numero2}`);
}else if(numero2 > numero1){
    alert(`El número mayor es: ${numero2}`);
    alert(`El número menor es: ${numero1}`);
}else{
    alert('Introduce números válidos')
}