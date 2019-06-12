console.log('Estamos conectados');

let edad = 12;
let nombre = 'Nicolás';

if(edad >= 18){
    console.log(`${nombre} tiene ${edad} años, es mayor de edad`);
    if(edad <= 33){
        console.log('Todavía eres millenial');
    }else if(edad >=70){
        console.log(`Eres anciano`);
    }else{
        console.log('Ya no eres millenial')
    }
}else{
    console.log(`${nombre} tiene ${edad} años, es Menor de edad`);
}