'use strict'



//FUNCIONES
// una funcion es una agrupaciuon reutilizable de un conjunto de instrucciones



//defino la funcion

function porConsola(numero1,numero2){
    console.log('la suma es: '+(numero1+numero2));
    console.log('la resta es: '+(numero1-numero2));
    console.log('la multiplicacion es: '+(numero1*numero2));
    console.log('la division es: '+(numero1/numero2));
}


function porPantalla(numero1,numero2){
    document.write('la suma es: '+(numero1+numero2)+'<br>');
    document.write('la resta es: '+(numero1-numero2)+'<br>');
    document.write('la multiplicacion es: '+(numero1*numero2)+'<br>');
    document.write('la division es: '+(numero1/numero2)+'<br>' );  
}


function calculadora(numero1,numero2,mostrar=false){
    //conjunto de instrucciones a ejecutar
    if (mostrar==false){
        porConsola(numero1,numero2)
    }
    else{
        porPantalla(numero1,numero2)
    }
    //devolver algo de la funcion
    return true;
}


//llamar la funcion
calculadora(1,2);
calculadora(12,2,true);
/*

calculadora(1123,212412);
console.log(calculadora(1,2));

for (var i=1;i<=10;i++){
    calculadora(i,8);
}
*/
