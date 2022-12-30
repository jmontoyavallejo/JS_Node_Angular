'use strict'

/*
utilizando un bucle, mostrar la suma y la media de lo s numeros introducidos hasta 
introducir un numero negativo, ahi mostrar el resultado
*/

var suma=0;
var contador=0;

do{
    var numero=parseInt(prompt('introduce los numeros hasta que metas uno negativo',0));
    if(isNaN(numero)){
        numero=0;
    }else if(numero>=0){
        suma+=numero;
        contador++;
    }
}while(numero>=0){
    console.log(suma);
    console.log(contador);
}

alert('la suma de todos los  numeros es: '+suma)

alert('la media de todos los numeros es: '+(suma/contador))

 




















