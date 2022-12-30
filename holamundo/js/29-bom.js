'use strict'

// BOM  BROWSER OBJET MODEL trabajar con el navegador
function getbom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.height);
console.log(window.location.href);
}

getbom()

function redirect(url){
    window.location.href=url;
    }


    function abrirVentama(url){
        window.open(url);
        }












