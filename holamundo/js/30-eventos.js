'use strict'

// eventos de la pantalla

//para cargar el html antes que corra el javascript, mete todo el codigo en esto
window.addEventListener('load',()=>{
//eventos, un evento es cuando sucede algo en la pagina, cuando el usuario interactua con cualqueir aprte de la pagina

//EVENTOS DE RATON
var boton = document.querySelector('#boton');
function cambiarColor() {
    var bg = boton.style.background;
    if (bg == 'green') {
        boton.style.background = 'red';
    }else{
        boton.style.background='green';
    }
    return true
}

// click
boton.addEventListener('click', cambiarColor);


// añade un manejador de evento para cuando el cursor entra en el botón
boton.addEventListener('mouseover', function() {
    boton.style.backgroundColor = 'yellow';
  });
  
// añade un manejador de evento para cuando el cursor sale del botón
boton.addEventListener('mouseout', function() {
this.style.backgroundColor = '#ccc';
});

//focus
var input = document.querySelector('#campo_nombre');
input.addEventListener('focus', function() {
    console.log('estas dentro del input');
    });

//blur
var input = document.querySelector('#campo_nombre');
input.addEventListener('blur', function() {
    console.log('[focus]estas afuera del input');
    });

//keydown
var input = document.querySelector('#campo_nombre');
input.addEventListener('keydown', function() {
    console.log('[keydown]estas pulsando esta tecla',String.fromCharCode(event.keyCode));
    });

//keypress
var input = document.querySelector('#campo_nombre');
input.addEventListener('keypress', function() {
    console.log('[keypress] esta tecla ha sido presionada',String.fromCharCode(event.keyCode));
    });

//keypress 
var input = document.querySelector('#campo_nombre');
input.addEventListener('keypress', function() {
    console.log('[keypress] esta tecla ha sido presionada',String.fromCharCode(event.keyCode));
    });


//keyup 
var input = document.querySelector('#campo_nombre');
input.addEventListener('keyup', function() {
    console.log('[keypress] esta tecla ha sido soltada',String.fromCharCode(event.keyCode));
    });






})




