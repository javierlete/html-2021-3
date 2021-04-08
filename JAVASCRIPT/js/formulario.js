window.onload = function() {
    var inputNombre = document.getElementById('nombre');
    var boton = document.getElementsByTagName('button')[0];

    console.log(inputNombre);
    console.log(boton);

    boton.onclick = function() {
        console.log('Se ha hecho clic en el botón');

        var nombre = inputNombre.value;

        console.log(nombre);

        var spanSaludo = document.getElementById('saludo');

        spanSaludo.innerHTML = 'Hola ' + nombre;
    };

};