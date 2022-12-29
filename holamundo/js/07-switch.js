'use strict'

// switch
console.log('switch');

var edad =18
var imprime=''
switch(edad){
    case 18:
        imprime='acabas de cumplir la mayoria de edad';
    break;
    case 25:
        imprime='ya eres un adulto';
    break;
    case 40:
        imprime='crisis incoming';
    break;
    default:
        imprime='tu edad es neutra';
    break;
}

console.log(imprime)