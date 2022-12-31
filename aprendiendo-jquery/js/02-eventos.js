$(document).ready(function () {

    //mouse over 

    var caja = $('#caja');
    /* 
    caja.mouseover(function(){
        $(this).css('background', 'red'); 
    });
    
    //mouse out
    caja.mouseout(function(){
        $(this).css('background', 'green');
    });
    */

    //hover
    function cambiarojo() { $(this).css('background', 'red'); };
    function cambiaverde() { $(this).css('background', 'green') };
    caja.hover(cambiarojo, cambiaverde)


    //click y doble click
    caja.click(function () {
        $(this).css('background', 'blue')
            .css('color', 'white')
    });
    caja.dblclick(function () {
        $(this).css('background', 'pink')
            .css('color', 'blue')
    });
    //focus y blur
    var nombre = $('#nombre')
    nombre.focus(function () {
        $(this).css('border', '2px solid green')
    });
    nombre.blur(function () {
        $(this).css('border', '1px solid gray');
        $('#datos').text($(this).val()).show();
    });
    //mouse down y mouse up
    var datos=$('#datos');
    datos.mousedown(function () {
        $(this).css('border-color', 'gray')
    });
    datos.mouseup(function () {
        $(this).css('border-color', 'green')
    });
    //mouse move
    $(document).mousemove(function () {
        $('body').css('cursor','none')
        $('#sigueme').css('left',event.clientX).css('top',event.clientY);
    })


























});