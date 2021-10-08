//a

array = ['Requirements', 'design', 'implementation', 'Verification', 'Maintenance'];

for(i = 0; i < array.length; i++) {
    alert(array[i]);
}

//b

array = ['Requirements', 'design', 'implementation', 'Verification', 'Maintenance'];
for(i = 0; i < array.length; i++) {

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
