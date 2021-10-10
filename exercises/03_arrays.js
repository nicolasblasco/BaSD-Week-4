// Ejercicio 03: Arrays

/*
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
console.log( '03-a: ',array[4], array[10]);

/*
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
console.log('03-b: ' + array.sort());

/*
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
array.unshift('Month');
array.push('Year');
console.log('03-c: ' + array);

/*
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
array.shift();
array.pop();
console.log('03-d: ' + array);

/*
e) Invertir el orden del array (utilizar reverse).
*/

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
console.log('03-e: ' + array.reverse());

/*
f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
console.log('03-f: ' + array.join(" - "));

/*
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/ 

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
arraySlice = array.slice(4,11);
console.log('03-g: ' + arraySlice);