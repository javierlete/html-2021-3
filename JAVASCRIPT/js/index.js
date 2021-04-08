'use strict';

alert('hola');

var seguro = confirm('¿Estás seguro?');
console.log(seguro);

if (seguro) {
    alert('El usuario está seguro');
} else {
    alert('El usuario NO está seguro');
}

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


var mes, dias;

mes = +prompt('Dime el mes');

if (isNaN(mes)) {
    alert('Eso no es un número');
} else {

    console.log(mes, typeof mes);

    if (1 <= mes && mes <= 12) {

        switch (mes) {
            case 2:
                dias = 28;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dias = 30;
                break;
            default:
                dias = 31;
        }

        alert(dias);
    } else {
        alert('El mes tiene que estar comprendido entre 1 y 12');
    }
}
// Posiciones0, 1, 2,  3
var notas = [7, 9, 2, 10];

console.log(notas[3]); // Nota que está en la posición 3

var x = 1;

while (x <= 5) {
    console.log(x++);
    // ++x; // x++; // x += 1; // x = x + 1;
}

x = 1;

do {
    console.log(x++);
} while (x <= 5);

for (var c = 1; c <= 5; c++) {
    console.log(c);
}

var c = 1;
while (c <= 5) {
    console.log(c);
    c++;
}

var arr = [5, 8, 6, 3, 6];

arr[0] = 10;

arr[5] = 20;

arr[10] = 50;

arr[7] = 'asdfasdf';

arr['nombre'] = 'Pepito';

arr[8] = new Date();

arr.apellido = 'Pérez';

for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}

for (var dato of arr) {
    console.log(dato);
}

for (var clave in arr) {
    console.log(clave, arr[clave]);
}

console.log(arr);
console.log(arr['nombre']);
console.log(arr.nombre);

var profesor = { nombre: 'Javier' };

profesor.apellido = 'Lete';

profesor['materia'] = 'JavaScript';

console.log(profesor);

/*
alert(
    profesor[
        prompt('Dime qué campo quieres ver del profesor')
    ]
);
*/

var campo = prompt('Dime qué campo quieres ver del profesor');
var valor = profesor[campo];
alert(valor);