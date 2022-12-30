'use strict'

/*
una calculadora qeu pida dos numeros por pantalla:
si metemos uno mal que nos los vuelva a pedir
nos meutre en el cuerpo de la pagina en una alerta y por la consola el resultado de sumar ,restar,multiplcar y dividir
*/

var numero1 = parseInt(prompt('numero 1',0));
var numero2 = parseInt(prompt('numero 2',0));

while(isNaN(numero1)||isNaN(numero2)||numero1<0||numero2<0){
    numero1 = parseInt(prompt('numero 1',0));
    numero2 = parseInt(prompt('numero 2',0));
}

var resultado='la suma es: '+(numero1+numero2)+'<br>'+
'la resta es: '+(numero1-numero2)+'<br>'+
'la multiplicacion es: '+(numero1*numero2)+'<br>'+
'la division es: '+(numero1/numero2)+'<br>';

var resultado2='la suma es: '+(numero1+numero2)+'\n'+
'la resta es: '+(numero1-numero2)+'\n'+
'la multiplicacion es: '+(numero1*numero2)+'\n'+
'la division es: '+(numero1/numero2)+'\n';

document.write(resultado);
alert(resultado2);
console.log(resultado2)








