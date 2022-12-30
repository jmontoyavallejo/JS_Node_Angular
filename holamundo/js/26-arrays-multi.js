'use strict'

//un array dentro de un array es un array multidimensional

var categorias =['accion','terror','comedias'];
var peliculas = ['la verdad duele','la vida es bella','gran torino']

var cine=[categorias,peliculas];

console.log(cine);

//para acceder a un array multiindex se hace de esta manera

console.log(cine[0][1]);
console.log(cine[1][1]);

peliculas.push('Batman');//agrega un elemento al array

var elemento ='';
while (elemento != 'acabar'){
    elemento =prompt('introduce tu pelicula')
    peliculas.push(elemento)
}
peliculas.pop();//elimina el ultimo elemento del array
peliculas[0]='remplazado';//reempalza un valor de un array, con la ubicacion del indice
console.log(peliculas);


//eliminar elementos de un array
var indice=peliculas.indexOf('gran torino')
if (indice>-1){
    peliculas.splice(indice,1)//eliminar apartir de un indice, n elementos
}
console.log(peliculas);


//convertir array a texto
var peliculas_string=peliculas.join();
console.log(peliculas_string)

// convertir texto a array
var cadena='texto1,texto2,texto3';
var cadena_array=cadena.split(',');
console.log(cadena_array)


//ordenar un array
peliculas.sort();//ordena de menor a mayor
console.log(peliculas);
peliculas.reverse();//ordena de mayor a menor
console.log(peliculas);































