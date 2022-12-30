'use strict'



/*
1.pida 6 nuemros por pantall y los meta en un array
2. mostra erl array completo en el cuerpo de la pagina y en la consola
3. ordenarlo y mostralo
4. invertir su orden y mostrarlo
5.mostra cuantos elementos tiene el array
6. busqueda de una valor intropoducido por el usuario, que nos diga 
si lo encuentra y su indice */


//1
var numeros=new Array(6);
for(var i=0;i<=5;i++){
    numeros[i]=parseInt(prompt('introduce un numero'))
}

//2
console.log(numeros)
document.write('<h1>contenido del array</h1>')
numeros.forEach((numero,index)=>{
    document.write('<Strong>'+numero+'</strong><br>')
})
//3
numeros.sort()
console.log(numeros)
//4
numeros.reverse()
console.log(numeros)
//5
console.log(numeros.length)

//6
var busqueda =parseInt(prompt('introduce el numero que quieres buscar'))
console.log(numeros.indexOf(busqueda))
































