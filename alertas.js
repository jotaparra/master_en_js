//ALERTAS

alert('Esta es mi alerta!');

//CONFIRMACION
let mi_resultado = confirm('Estás seguro que quieres continuar');
console.log(mi_resultado); /* --> devuelve un booleano, si el usuario presiona si, el resultado será TRUE, si presiona cancelar, será FALSE */


//INGRESO DE DATOS
let mi_resultado = prompt('¿Qué edad tienes?', 18);
console.log(typeof mi_resultado);