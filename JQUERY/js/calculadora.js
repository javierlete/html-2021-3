$(function() {
    $('#igual').on('click', function() {
        var x = +$('#x').val();
        var y = +$('#y').val();

        var r;

        switch ($('#operacion').val()) {
            case '+':
                r = x + y;
                break;
            case '-':
                r = x - y;
                break;
            case '*':
                r = x * y;
                break;
            case '/':
                r = x / y;
                break;
        }

        $('#resultado').html(r);
    });
});