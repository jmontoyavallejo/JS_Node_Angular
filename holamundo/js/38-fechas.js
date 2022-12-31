'use strict'

var fecha =new Date();


var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hours = fecha.getHours();

var texto_hora=`
el ano es: ${year}
el mes es: ${month}
el dia es: ${day}
la hora es: ${hours}
`

console.log(texto_hora);