'use strict'


window.addEventListener('load', () => {
    let tiempo = null;
  
    function intervalo() {
      if (tiempo === null) {
        // temporizadores
        tiempo = setInterval(function () {
          console.log('set interval ejecutado');
  
          var encabezado = document.querySelector('h1');
          if (encabezado.style.fontSize == '50px') {
            encabezado.style.fontSize = '49px'
          } else {
            encabezado.style.fontSize = '50px'
          }
        }, 300);
  
        setTimeout(function () {
          console.log('set timeout una vez ejecutado');
  
          var encabezado = document.querySelector('h1');
          encabezado.style.color = 'red'
        }, 1000);
      } else {
        console.log('Ya hay un intervalo en ejecución');
      }
    }
  
    var stop = document.querySelector('#stop');
    stop.addEventListener('click', function () {
      clearInterval(tiempo);
      tiempo = null;
      alert('has parado el bucle');
    });
  
    var start = document.querySelector('#start');
    start.addEventListener('click', function () {
      alert('has iniciado el bucle');
      intervalo();
    });
  });
  


























