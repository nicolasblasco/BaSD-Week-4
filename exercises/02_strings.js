//a

var stringUpperCase = 'My app is made with Javasricpt'.toUpperCase();
console.log('02-a: ' + stringUpperCase);

//b 

var stringB = 'Lorem is a new app';
var subStringB = stringB.substring(0,5);
console.log('02-b: ' + subStringB);

//c

var stringC = 'Lorem is a new app';
var subStringC = stringC.substring(stringC.length-3, stringC.length);
console.log('02-c: ' + subStringC);

//d

var stringD = 'lorem is a New App';
var subStringD = stringD.substring(0,1).toLocaleUpperCase() + stringD.substring(1,stringD.length).toLocaleLowerCase();
console.log('02-d: ' + subStringD);

//e 

var stringE = 'Lorem is a new app';
var firstBlankPoistion = stringE.indexOf(' ');
console.log('02-e: ' + firstBlankPoistion);

//f

var stringF = 'sofTwaRe DeveLoper'; 
var index = stringF.indexOf(' ');
var subStringF = stringF.substring(0, 1).toLocaleUpperCase() + stringF.substring(1,index).toLocaleLowerCase() 
+ stringF.substring(index,stringF.length).toLocaleLowerCase();
console.log('02-f: ' + subStringF);