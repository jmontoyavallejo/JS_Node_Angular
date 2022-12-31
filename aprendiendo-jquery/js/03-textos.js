$(document).ready(function () {
    reload_links();

    $('#add_button').removeAttr('disabled')
        .click(function () {
            $('#menu').append('<li><a href="' + $('#add_link').val() + '"></a></li>');
            reload_links();
        });





    function reload_links() {
        $('a').each(function () {
            var enlace = $(this).attr('href');
            $(this).text(enlace);
            $(this).attr('target', '_blank');
        })
    };




















});