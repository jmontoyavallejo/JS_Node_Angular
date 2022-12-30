'use strict'

//transformacion de textos

var numero=444;
var texto1 = 'bienvenido al curso de javascript de victor robles';
var texto2='es muy buen curso';

var dato =numero.toString();

dato=texto1.toUpperCase();
dato=texto1.toLowerCase();
console.log(dato);

//calcular longitud de un texto
var nombre = 'juan pablo montoya';
var valor_nulo=null
var valor_numero=1;
var array=['hola','mundo']
console.log(nombre.length);
console.log(array.length);// numero de items en el array
console.log(valor_numero.length);//undefined
// console.log(valor_nulo.length);//error



// Concatenar , unir textos
var texto_unido =texto1+' '+texto2
console.log(texto_unido);
var textoTotal=texto1.concat(' '+texto2)
console.log(textoTotal);

//BUSQUEDA EN TEXTOS
var busqueda =texto1.indexOf('curso');//devuelve un entero apartir de l caracter donde empieza la primera coincidencia
console.log(busqueda);
var busqueda2 =texto1.lastIndexOf('curso');//devuelve un entero apartir de l caracter donde empieza la ultima coincidencia
console.log(busqueda2);
var busqueda3 =texto1.search('curso');//lo mismo que index of
console.log(busqueda3);
var busqueda4 =texto1.search('asdasdas');//si no encuentra ninguna palabra devuelve -1
console.log(busqueda4);
var busqueda5 =texto1.match(/curso/gi);//devuelve un array con los reultados que encuentre con mucha informacion
console.log(busqueda5);
var busqueda6 =texto1.substr(14,5);//con base en los indices devuelve las palabras, el primer caracter y el numnero de letras adelante
console.log(busqueda6);
var busqueda7 =texto1.charAt(44);//letra contrecta de un string con el indicie
console.log(busqueda7);
var busqueda8 =texto1.startsWith('hola');//devuelve bool de si el texto inicia en esa palabra
console.log(busqueda8);
var busqueda8 =texto1.endsWith('hola');//devuelve bool de si el texto termina en esa palabra
console.log(busqueda8);
var busqueda8 =texto1.includes('hola');//devuelve bool de si el texto tiene en esa palabra
console.log(busqueda8);


// funciones de reemplazo
var reemplazo =texto1.replace('hola','adios');//remplaza las ocurrencias del primer string por el segundo
console.log(reemplazo);
var reemplazo2 =texto1.slice(14,22);//remplaza el texto por uno que inicia desde el indicie entregado hasta el final del string
console.log(reemplazo2);
var reemplazo3 =texto1.split();//mete toda la frase dentro de un array
var reemplazo3 =texto1.split(" ");//mete toda la frase dentro de un array y las separa por un indicador
console.log(reemplazo3);
var reemplazo4 =texto1.trim();//recorta lso espacios por delante y por detras del string
console.log(reemplazo4);


















