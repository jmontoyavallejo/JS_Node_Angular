'use strict'

//funciones anonimas
//es una funcion que no tiene nombre

var pelicula=function(nombre){
    return 'la pelicula es:'+nombre;
}


//callback es una funcion que se ejecuta dentro de otra

function sumame(numero1,numero2,sumaymuestra,sumaPorDos){
    var sumar=numero1+numero2;
    sumaymuestra(sumar)
    sumaPorDos(sumar)
    return sumar
}


// la funcion anonima tambien se puede definir como una flecha=>, si es solo una variable no se necesita que tenga parentesis
sumame(5,6,function(dato){
    console.log('la suma es :',dato)
},dato=>{
    console.log('la suma por dos  es :',(dato*2))
}
)


















