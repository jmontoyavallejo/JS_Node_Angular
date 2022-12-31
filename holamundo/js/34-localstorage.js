'use strict';

window.addEventListener('load', function(){
//local storage

//comprobar disponibilidad del local storage
if (typeof (storage) !== 'undefined') {
    console.log('local storage disponible');
} else {
    console.log('local storage not available');
};


//guardar datos
localStorage.setItem('titulo','curso de symfony de victor robles')
console.log(localStorage.getItem('titulo'));

//guardar objetos
var usuario={
    nombre: 'Maria',
    email:'maria.giova@gmail.com',
    web: 'http://www.google.com',
};
localStorage.setItem('usuario',JSON.stringify(usuario));

//recuperar objeto del local storage
var userjs=JSON.parse(localStorage.getItem('usuario'));
console.log(userjs);

//recuperar elemento del local storage
console.log(document.querySelector('#peliculas'));
console.log(document.querySelector('#datos'));
document.querySelector('#peliculas').innerHTML=localStorage.getItem('titulo');
document.querySelector('#datos').append(userjs.email);

});














