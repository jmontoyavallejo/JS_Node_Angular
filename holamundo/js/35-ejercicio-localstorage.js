'use strict'

var formulario = document.querySelector('#formpeliculas');
formulario.addEventListener('submit', function(event) {
    var titulo =document.querySelector('#addpelicula').value;
    console.log(titulo.lenght);
    if(titulo.lenght>=1){
    localStorage.setItem(titulo,titulo);
    }
});