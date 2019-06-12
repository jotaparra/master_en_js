'use strict'

//WHILE

/* let year = 2018;

while(year<= 2051){
    //ejecuta esto
    console.log(`Estamos en el año: ${year}`);
} */

/* Esto sería un bucle infinito ya que cada vez que entra el loop, year vale 2018, entonces nunca se confirmará la condición.
Para eso podríamos colocar un incrementador  */

let year = 2018;

while(year<= 2051){
    //ejecuta esto
    console.log(`Estamos en el año: ${year}`);

    year++;
}


year = 2018;
while(year!=1991){
    //ejecuta esto
    console.log(`Estamos en el año: ${year}`);

    year--;
}


//DO WHILE --> nos permite ejecutar primero un bloque de instrucciones y luego evaluar la condición.

let years = 30;
do{
    alert('Sólo cuando sea diferente a 20');
    years--;
}while(years > 25);

/* El break dentro de un bucle nos permite salir de la estructura de control y dejar de ejecutar el bucle y que no sea más iteración
de forma que si yo hago un if y quiero comprobar que cuando el año sea igual a 2000 el bucle deje de ejecutarse puedo colocar un break */

year = 2018;
while(year!=1991){
    //ejecuta esto
    console.log(`Estamos en el año: ${year}`);
    if(year == 2000){
        break;  //--> detendrá el bucle hasta que se cumpla que year es igual a 2000.
    }
    year--;
}
