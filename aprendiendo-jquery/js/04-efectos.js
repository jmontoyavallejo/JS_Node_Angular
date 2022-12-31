$(document).ready(function () {

$('#mostrar').click(function () {
    $(this).hide('normal');
    $('#ocultar').show('fast');
    $('#caja').fadeIn('slow');
})

$('#ocultar').click(function () {
    $(this).hide('normal');
    $('#mostrar').show('fast');
    $('#caja').fadeOut('slow');
})
















});