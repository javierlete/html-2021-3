'use strict';
/*
alert('hola');

var seguro = confirm('¿Estás seguro?');
console.log(seguro);

if (seguro) {
    alert('El usuario está seguro');
} else {
    alert('El usuario NO está seguro');
}
*/
var nombre = prompt('¿Cómo te llamas?');
console.log('Hola ' + nombre);

switch (nombre) {
    case 'Javier':
        alert('Tu eres el profe');
        break;
    case 'Pepe':
        alert('El famoso ejemplo de nombre');
        break;
    default:
        alert('Otro nombre cualquiera');
}

// Posiciones0, 1, 2,  3
var notas = [7, 9, 2, 10];

alert(notas[3]); // Nota que está en la posición 3