// Ejercicio 01: Variables y Operadores 

/* 
a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 
3er variable.
*/

var num1 = 20;
var num2 = 7;
var sum = num1 + num2;
console.log('01-a: The sum of the two numbers is ' + sum);

/*
b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
*/

var string1 = 'My ';
var string2 = 'app';
var concatenation = string1 + string2;
console.log('01-b: The concatenation of the two strings is ' + concatenation);

/*
c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
resultado de la suma en una 3er variable (utilizar length).
*/

var string1 = 'My';
var string2 = 'app';
var sumLength = string1.length + string2.length;
console.log('01-c: The sum of the length of the two strings is ' + sumLength);