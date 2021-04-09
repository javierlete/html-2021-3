'use strict';

var x, op, y;

window.onload = function() {
    var botonera = document.getElementById('botonera');
    var operaciones = document.getElementById('operaciones');
    var pantalla = document.getElementById('pantalla');

    var boton;

    for (var numero = 9; numero >= 0; numero--) {
        boton = document.createElement('button');

        boton.innerText = numero;

        boton.onclick = function() {
            pantalla.value = pantalla.value + this.innerText;
        }

        botonera.appendChild(boton);
    }

    var igual = document.createElement('button');

    igual.innerText = '=';

    igual.onclick = function() {
        y = +pantalla.value;

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

        pantalla.value = r;
    }

    botonera.appendChild(igual);

    var borrar = document.createElement('button');

    borrar.innerText = 'C';

    borrar.onclick = function() {
        pantalla.value = '';
    }

    botonera.appendChild(borrar);

    var simbolos = ['+', '-', '*', '/'];

    for (var operacion of simbolos) {
        boton = document.createElement('button');

        boton.innerText = operacion;

        boton.onclick = function() {
            x = +pantalla.value;
            op = this.innerText;

            pantalla.value = '';
        }

        operaciones.appendChild(boton);
    }
};