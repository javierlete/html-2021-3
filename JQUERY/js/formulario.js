$(function() {
    $('button').on('click', function() {
        console.log('Se ha hecho clic en el botón');

        $('#saludo').html('Hola ' + $('#nombre').val());
    });

});