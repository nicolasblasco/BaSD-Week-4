//a

array = ['Requirements', 'design', 'implementation', 'Verification', 'Maintenance'];
for(i = 0; i < array.length; i++) {
    alert(array[i]);
}

//b
//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

array = ['Requirements', 'design', 'implementation', 'Verification', 'Maintenance'];
for(i = 0; i < array.length; i++) {
    array[i] = array[i].substring(0,1).toLocaleUpperCase() + array[i].substring(1,array[i].length).toLocaleLowerCase();
    alert(array[i]);
}

//c

sentence = [];
for(i = 0; i < array.length; i++) {
    sentence += array[i] + " ";
}
alert(sentence);

//d

emptyArray = [];
for (i = 0; i < 10; i++) {
    emptyArray += i + " ";
}
console.log(emptyArray);
