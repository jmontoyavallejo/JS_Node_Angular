'use strict'


//ambito gobla y local de las varaiables


var texto_alt='soy una variable global que no me han llamado en la funcion inicial';
var texto='Hola Mundo Soy una variable Global';
var numero = 12

function holaMundo(texto){
    var hola_mundo='texto dentro de funcion'
    console.log(texto);
    console.log(texto_alt);
    console.log(typeof numero.toString());
    console.log(typeof numero);
    console.log(hola_mundo);

}


holaMundo(texto);
console.log(hola_mundo);//no esta definida dentro de la funcion




















