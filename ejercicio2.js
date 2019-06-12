/* Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta que el usuario ingrese un número negativo, allí se mostrará el resultado */

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Ingrese un números hasta que metas uno negativo', 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >=0){
        suma = suma + numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);

}while(numero>= 0)


alert(`la suma de todos los números es: ${suma}`);
alert(`la media de todos los números es: ${suma/contador}`);
