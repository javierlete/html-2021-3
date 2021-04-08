window.onload = function() {

    var igual = document.getElementById('igual');
    var resultado = document.getElementById('resultado');

    igual.onclick = function() {
        var x = +document.getElementById('x').value;
        var y = +document.getElementById('y').value;
        var operacion = document.getElementById('operacion').value;

        var r;

        switch (operacion) {
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

        resultado.innerHTML = r;

        // var textoOperacion = x + operacion + y;
        // console.log(textoOperacion);

        // var resultadoNumerico = eval(textoOperacion);
        // console.log(resultadoNumerico);

        // resultado.innerHTML = resultadoNumerico;
    };
};