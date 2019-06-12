'use strict'

//DOM - Document Object Model
function cambiarColor(color){
    caja.style.background = color;
}

let caja = document.getElementById('micaja');
//tambien podriamos hacerlo con querySelector, que es similiar a la sintaxis de css
// let caja = document.querySelector('#micaja');

caja.innerHTML = '¡TEXTO EN LA CAJA DESDE JS!';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white'
caja.className = 'hola adios'

console.log(caja);

