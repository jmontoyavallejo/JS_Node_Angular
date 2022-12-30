'use strict'

//Pamaretros de REST  y SPREAD


//rest es colocar en la deficion de una funcion  ... para recibir multiples datos
function listadoFrutas(fruta1,fruta2,...resto_de_frutas){
    console.log('fruta 1: '+fruta1);
    console.log('fruta 2: '+fruta2);
}


listadoFrutas('manzana','naranja','pera','melon','coco','sandia');


//spread es colocar en la llamada de una funcion  ... para recibir multiples datos
var frutas=['manzana','naranja']
listadoFrutas(...frutas,'pera','melon','coco','sandia');
























