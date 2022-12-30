'use strict'

/*
programa que meustre todos lso numeros divisores introducido en un prompt
*/

var numero=parseInt(prompt('mete un numero ',1))

for (var i=1;i<=numero;i++){
    if(numero%i==0){
    console.log('divisor: '+i);
}
}