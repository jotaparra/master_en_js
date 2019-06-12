'use strict'

//Funciones
//Una función es una agrupación reutilizables de un conjunto de instrucciones

//Defino la función

function calculadora(numero1, numero2, mostrar = false){  //podemos ahregarle un parametro opcional que ya viene inicializado por defecto y no es necesario pasarlo cuando invoquemos la función

    //Conjunto de instrucciones a ejecutar
    
    if(mostrar == false){
    document.write('Suma: ' + (numero1+numero2)+"<br/>");
    document.write('Resta: ' + (numero1-numero2) + "<br/>");
    document.write('Multiplicación: ' + (numero1*numero2) +"<br/>");
    document.write('División: ' + (numero1/numero2) + "<br/>");
    
}else{
    console.log('Suma: ' + (numero1+numero2));
    console.log('Resta: ' + (numero1-numero2));
    console.log('Multiplicación: ' + (numero1*numero2));
    console.log('División: ' + (numero1/numero2));
}
}


//invocar o llamar la función
calculadora(1,7);

calculadora(2,5, true)