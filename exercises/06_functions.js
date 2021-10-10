// Ejercicio 6: Functions

/*
a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/ 

function sum(a,b) {
    return a + b;
}
var result = sum(5,9);
console.log('06-a: The sum is ' + result);

/*
b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

function sum2(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        alert('06-b: Error! Not a number!');
        return NaN;
    } else {
        return a + b;
    }
}
var result2 = sum2('d',5);
console.log('06-b: The sum is ' + result2);

/*
c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/

function validateInteger(a) {                                                                                                                                                                                   
    return Number.isInteger(a);
}
var x = 45;
var y = 4.5
console.log('06-c: ¿is ' + x + ' an integer number? ' + validateInteger(x));
console.log('06-c: ¿is ' + y + ' an integer number? ' + validateInteger(y));

/*
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya 
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

function sum3(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        alert('06-d: Error! Not a number!');
        return NaN;
    } else if (validateInteger(a) !== true) {
        alert('06-d: Error! a is not a integer number!');
        a = Math.round(a); 
        return a;                                                                                                                                                                                                                                                                                            
    } else if (validateInteger(b) !== true) {
        alert('06-d: Error! b is not a integer number!');
        b = Math.round(b);
        return b; 
    } else {
        return a + b;
    }
}
var w = 'a';
var x = 4.6;
var y = 7;
var z = 5;
console.log('06-d: ' + sum3(w,x)); //validación NaN
console.log('06-d: ' + sum3(x,y)); //validación integer number
console.log('06-d: ' + sum3(y,x)); //validación integer number
console.log('06-d: ' + sum3(y,z));

/*
e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que 
todo siga funcionando igual.
*/ 

function validateNumber (num) {
    if (typeof(num) !== 'number') {
        return false;
    } 
}

function sum4(a,b) {
    if (validateNumber(a) == false || validateNumber(b) == false) {
        alert('06-e: Error! Not a number!')
        return NaN;
    } else if (validateInteger(a) !== true) {
        alert('06-e: Error: a is not an integer number!');
        a = Math.round(a); 
        return a;
    } else if (validateInteger(b) !== true) {
        alert('06-e: Error: b is not an integer number!');
        b = Math.round(b);
        return b; 
    } else {
        return a + b;
    }
}
var w = 'a';
var x = 8;
var y = 7;
var z = 4.5;
console.log('06-e: ' + sum4(x,w)); //validación NaN
console.log('06-e: ' + sum4(x,z)); //validación integer number
console.log('06-e: ' + sum4(x,y));