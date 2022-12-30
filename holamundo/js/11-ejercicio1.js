'use strict'


/*
PROGRAMA QUE NOS PIDA DOS NUMEROS Y QUE NOS DIGA CUAL ES EL MAYOR, 
si los  numero son menores que cero o no son numeros , los vuelve a pedir
*/

var numero1 = parseInt(prompt('numero 1',18));
var numero2 = parseInt(prompt('numero 2',12));


while (numero1<=0 ||numero2<=0 ||isNaN(numero1)||isNaN(numero2)){
    var numero1 = parseInt(prompt('numero 1',18));
    var numero2 = parseInt(prompt('numero 2',12));
}
if(numero1>numero2){
    console.log('es mas grande el numero 1');
}else if(numero1<numero2){
    console.log('es mas grande el numero 2');
}else if(numero1==numero2){
    console.log('son iguales');
}else{
    console.log('no son numeros')
}
