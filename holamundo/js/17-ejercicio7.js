'use strict'

/*
tabla de multiplicar de un numero introducido por pantalla
*/

var numero =parseInt(prompt('de que numero quieres la tabla?',1));
document.write('<h1> Tabla del '+numero +'</h1>');
for (var i=1;i<=10;i++){
    document.write(i+' x '+numero +' = '+(i*numero)+'<br>');
}



//TODAS LAS TABLAS DE MULTIPLICAR
for (var c=1;c<=10;c++){
    document.write('<h1> Tabla del '+c +'</h1>');
    for (var i=1;i<=10;i++){
        document.write(i+' x '+c +' = '+(i*c)+'<br>');
}}










