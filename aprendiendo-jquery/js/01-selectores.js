'use strict'
$(document).ready(function () {

    //selector de id
    $('#rojo').css('background', 'red')
        .css('color', 'white');
    $('#amarillo').css('background', 'yellow')
        .css('color', 'green');
    $('#verde').css('background', 'green')
        .css('color', 'white');
    console.log(rojo)


    //selector de clases

    $('.zebra').css('padding', '5px');

    $('.sin_borde').click(function () {
        console.log('click');
        $(this).addClass('zebra');
    });



    //selector de etiqueta
    var parrafos = $('p').css('cursor','pointer');
    parrafos.click(function () {
        let that = $(this)
        if (!that.hasClass('grande')) {
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }});

    //selector de atributos
    $('[title=google]').css('background', '#ccc');
    $('[title=facebook]').css('background', 'blue');

    //otros
    //$('p,a').addClass('margen_superior ');
    let busqueda =$('#caja .resaltado');
    console.log(busqueda);


});







