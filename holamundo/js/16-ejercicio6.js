'use strict'

/*
hacer un programa que nos diga si un numero es par o impar, si no es valido, que pida de nuevo el numero
*/

var numero=parseInt(prompt('introduce un numero',0));

while(isNaN(numero)){
    numero=parseInt(prompt('introduce un numero',0));
}


if (numero%2==0){
    console.log('es par')
}else{
    console.log('es impar')
}