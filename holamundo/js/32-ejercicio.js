'use strict'

window.addEventListener('load', function(){
    console.log('DOM cargado');
    var formulario = document.querySelector('#formulario');
    var box_dashed=document.querySelector('.dashed');
    box_dashed.style.display='none';

    formulario.addEventListener('submit', function(){
            console.log('evento submit')
            var nombre = document.querySelector('#nombre').value;
            var apellidos = document.querySelector('#apellidos').value;
            var edad = document.querySelector('#edad').value;
            if(nombre==null || edad==null || apellidos==null||nombre.length==0 || edad.length==0||apellidos.length==0){
                alert('los valores no son validos')
                document.querySelector('#error').innerHTML = 'no es valido';
                return false;
                
            }else{
                document.querySelector('#error').style.display='none';
                return false;
            }
            
            
            
            box_dashed.style.display='block';


            var p_nombre = document.querySelector('#p_nombre span');
            var p_apellidos = document.querySelector('#p_apellidos span');
            var p_edad = document.querySelector('#p_edad span');

            p_nombre.innerHTML = nombre;
            p_apellidos.innerHTML = apellidos;
            p_edad.innerHTML = edad;
        /*var datos_usuario=[nombre, apellidos, edad];
        var indice
        for(indice in datos_usuario){
            var parrafo=document.createElement('p');
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }*/
        
        
        


    });

















});