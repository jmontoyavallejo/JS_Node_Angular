'use strict'

//arrays,arreglos,matrices

var nombre='victor robles';

//iniciacion de un array
var nombres=['victor robles','juan lopez','manolo garcia','jose martin',52,true];
var lenguajes= new Array('php','js','go','java');

console.log(nombres);
console.log(lenguajes);
console.log(nombres[2]);//indice inicia en 0
console.log(nombres.length);//tamano del array


//ejercicio  simple imprimir item array
/*
var elemento =parseInt(prompt('que elemento del array quieres',0));
if(elemento>=nombres.length){alert('introduce el numero correcto, maximo deben ser '+(nombres.length-1))}else{alert(nombres[elemento]);}
*/


//ejercicio simple imprimir array

document.write('<h1>lenguajes de programacion del 2018</h1>');
document.write('<ul>');
for(var i=0;i<lenguajes.length;i++) {
    document.write('<li>'+lenguajes[i]+'</li>');
} 
document.write('</ul>');


//ejercicio usando foreach
document.write('<h1>lenguajes de programacion del 2018</h1>');
document.write('<ul>');
lenguajes.forEach((elemento,index,data)=>{
    document.write('<li>'+elemento+'</li>')
}

)
document.write('</ul>');



// recorrer arreglos for in
document.write('<h1>lenguajes de programacion del 2018</h1>');
document.write('<ul>');
for (let lenguaje in lenguajes){
    document.write('<li>'+lenguajes[lenguaje]+'</li>')}
    document.write('</ul>');

//busquedas
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje=='php'
})
var busqueda = lenguajes.find(lenguaje=> lenguaje=='php');
console.log(busqueda)

var precios=[10,50,20,30,50,80]
var filtro =precios.some(precio=>precio >20)//boleano para verificar todos lso valores del array
