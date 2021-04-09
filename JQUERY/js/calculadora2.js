'use strict';

var x, op, y;

$(function() {
    for (var numero = 9; numero >= 0; numero--) {
        $('<button>').text(numero).on('click', function() {
            $('#pantalla').val($('#pantalla').val() + $(this).text());
        }).appendTo($('#botonera'));
    }

    $('<button>=</button>').on('click', function() {
        y = +$('#pantalla').val();

        var r;

        switch (op) {
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

        $('#pantalla').val(r);
    }).appendTo($('#botonera'));

    $('#botonera').append($('<button>C</button>').on('click', function() {
        $('#pantalla').val('');
    }));

    var simbolos = ['+', '-', '*', '/'];

    $(simbolos).each(function() {
        $('<button>').text(this).appendTo($('#operaciones'));
    });

    $('#operaciones button').on('click', function() {
        x = +$('#pantalla').val();
        op = $(this).text();

        $('#pantalla').val('');
    });
});