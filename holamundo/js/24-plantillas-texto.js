'use strict'


//PLANTILLAS DE TEXTO
var nombre = prompt('mete tu nombre');
var apellidos = prompt('mete tu apellido');

//var texto='mi nombre es ' +nombre+"mis apellidos son "+apellidos;

// string multilinea
var texto=`
<h1> hola que tal</h1>
<h3>mi nombre es : ${nombre}</h3>
<h3>mis apellidos son : ${apellidos}</h3>
`;
document.write(texto);



























