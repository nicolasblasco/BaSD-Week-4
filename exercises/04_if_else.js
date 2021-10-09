//a

var x = Math.random()
if (x >= 0.5) {
    alert('Greater than 0.5');
} else {
    alert('Lower than 0.5');
}

//b

var Age = Math.floor(Math.random() * 101);
if (Age < 2) {
    alert('Bebe');
} else if (Age >=2 && Age < 13) {
    alert('Niño');
} else if (Age >= 13 && Age < 20) {
    alert('Adolescente');
} else if (Age >= 20 && Age < 31) {
    alert('Joven');
} else if (Age >= 31 && Age < 61) {
    alert('Adulto');
}  else if (Age >= 61 && Age < 76) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
}