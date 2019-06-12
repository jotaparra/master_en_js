//Recorrer array con for

let lenguajes = new Array('PHP', 'JS', 'Go', 'Java')
document.write(`<ul>`)
for (i=0 ; i<lenguajes.length ; i++){
    
    document.write(`<li> ${lenguajes[i]} </li>`)
    
}
document.write(`</ul>`)

//Recorrer array con for in

let names = new Array('fabi', 'carlos' , 'luka', 'ofelia')
document.write(`<ul>`)
    for (name in names){
        document.write(`<li> ${names[name]} </li>`)
    }
document.write(`</ul>`)
console.log(names[3]); //ofelia

//--ejemplo con un objeto--

let objeto = {nombre: 'luka', color: 'blanco', edad: 3};
document.write(`<ul>`)
for (const prop in objeto){
    document.write(`<li> ${prop} = ${objeto[prop]} </li>`)
}
document.write(`</ul>`)
console.log(objeto.color); //blanco



//Recorres array con forEach

let numbers = new Array('uno', 'dos', 'tres', 'cuatro')
document.write(`<ul>`)


document.write(`</ul>`)
