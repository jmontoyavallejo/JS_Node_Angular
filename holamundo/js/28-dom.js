'use strict'

//DOM document objet model

function cambiaColor(color){
    caja.style.background=color;
}

//var caja =document.getElementById('micaja');

var caja =document.querySelector('#micaja');



caja.innerHTML='texto en al caja desde js';
caja.style.background='red';
caja.style.padding='20px';
caja.style.color='white';
caja.className='hola hola2';


//conseguir elementos por su etiqueta
// var todosLosDivs=document.getElementsByTagName('div');

// var contenidoentexto = todosLosDivs[2];
// contenidoentexto.innerHTML='otro texto con otro valor'
// console.log(contenidoentexto);

//todosLosDivs.forEach((valor,indice)=>{
var todosLosDivs=document.getElementsByTagName('div');
var seccion=document.querySelector('#miseccion')
var hr=document.createElement("hr")


for(let i = 0; i < todosLosDivs.length; i++){
    var parrafo =document.createElement('p');
    var texto =document.createTextNode(todosLosDivs[i].textContent);
    parrafo.append(texto);
    document.querySelector('#miseccion').append(parrafo)
}
seccion.append(hr)
//})
console.log(todosLosDivs)
// conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
for (let i = 0; i < divsRojos.length; i++){
    divsRojos[i].style.background='blue'
}
console.log(divsRojos)

var divsRojos = document.getElementsByClassName('amarillo');
for (let i = 0; i < divsRojos.length; i++){
    divsRojos[i].style.background='green'
}
console.log(divsRojos)

// query selector solo selecciona el primer item que encuentre
var id=document.querySelector('#encabezado')
console.log(id)



















