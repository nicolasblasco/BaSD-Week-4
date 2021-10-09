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

function sum3(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        alert('Error: not a number');
        return NaN;
    } else if (validateInteger(a) !== true) {
        alert('Error a');
        a = Math.round(a); 
        return a;
    } else if (validateInteger(b) !== true) {
        alert('Error b');
        b = Math.round(b);
        return b; 
    } else {
        return a + b;
    }
}

//e 

function validateNumber (number) {
    if (typeof(num) !== 'number') {
        alert('Error: not a number');
        return false;
    } 
}

function sum4(a,b) {
    if (validateNumber(a) == false || validateNumber(b) == false) {
        alert('Error: not a number')
    } else if (validateInteger(a) !== true) {
        alert('Error a');
        a = Math.round(a); 
        return a;
    } else if (validateInteger(b) !== true) {
        alert('Error b');
        b = Math.round(b);
        return b; 
    } else {
        return a + b;
    }
}
