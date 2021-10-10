// Ejercicio 2: Strings

/*
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).
*/

var stringUpperCase = 'My app is made with Javasricpt'.toUpperCase();
console.log('02-a: ' + stringUpperCase);

/*
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).
*/

var stringB = 'Lorem is a new app';
var subStringB = stringB.substring(0,5);
console.log('02-b: ' + subStringB);

/*
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
guardando el resultado en una nueva variable (utilizar substring).
*/

var stringC = 'Lorem is a new app';
var subStringC = stringC.substring(stringC.length-3, stringC.length);
console.log('02-c: ' + subStringC);

/*
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).
*/

var stringD = 'lorem is a NEW App';
var subStringD = stringD.substring(0,1).toLocaleUpperCase() + stringD.substring(1,stringD.length).toLocaleLowerCase();
console.log('02-d: ' + subStringD);

/*
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var stringE = 'Lorem is a new app';
var firstBlankPoistion = stringE.indexOf(' ');
console.log('02-e: ' + firstBlankPoistion);

/*
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +).
*/

var stringF = 'sofTwaRe DeVELoper'; 
var index = stringF.indexOf(' ');
var subStringF = stringF.substring(0, 1).toLocaleUpperCase() + stringF.substring(1,index).toLocaleLowerCase() 
+ stringF.substring(index,stringF.length).toLocaleLowerCase();
console.log('02-f: ' + subStringF);