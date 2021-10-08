//a

function sum(a,b) {
    return a + b;
}
result = sum(5,9);
console.log(result);

//b

function sum2(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        alert('Error');
    } else {
        return a + b;
    }
}
result2 = sum2(3,'a');
console.log(result2);


//c

function validateInteger(a) {
    return Number.isInteger(a);
}
x = 45;
console.log(validateInteger(x));

//d
/*
function sum3(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        alert('Error');
    } else if (validateInteger(a) !== true) {
        alert('Error a');
        return Math.round(a); 
    } else if (validateInteger(b) !== true) {
        alert('Error b');
        return Math.round(b); 

    } else {
        return a + b;
    }
}
result3 = sum3(4.7,5);
console.log(result3);
*/