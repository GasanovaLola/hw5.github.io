// 1

function fillingMass(arr , size) {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.round( Math.random() * (1 + 10) - 1);
    }

    console.log(arr);
    return true;
}

var arr = [];
var size = 5;

fillingMass(arr, size);


//2

function comparisonMass(arr1, arr2) {
    var sum1 = 0;
    var sum2 = 0;
    var size = 0;

    if (arr1.length > arr2.length) {
        size = arr1.length;
    }
    else if (arr1.length < arr2.length) {
        size = arr2.length;
    }
    else {
        size = arr2.length;
    }

    for (let i = 0; i < size; i++) {
        if (+arr1[i] === arr1[i]) {
            sum1 += (+arr1[i]);
        }
        if (+arr2[i] === arr2[i]) {
            sum2 += (+arr2[i]);
        }
    }

    if (sum1 > sum2) {
        return arr1;
    }
    else if (sum2 > sum1) {
        return arr2;
    }
    else {
        return "сумма элементов массива равна";
    }
}

var arr1 = [1, "io", 10, 4];
var arr2 = [3, "yuy", 12, 1];

console.log(comparisonMass(arr1, arr2));

// 3

function doMath(x, znak, y) {
    console.log(eval(arguments[0] + arguments[1] + arguments[2]));
}

var x = "1";
var y = "8";
var znak = "/";

doMath(x, znak, y);

// 4 

function func(str, mass) {

    for (let i = 0, size = mass.length; i < size; i++) {
        str = str.replace(mass[i], "");
    }

    if (str.indexOf(mass[0]) > -1 || str.indexOf(mass[1]) > -1) {
        func(str, mass);
    }
    else {
        console.log(str);
        return true;
    }
}

console.log(func("hello world", ['l', 'd']));

// 5
/*function filter (input, isEven) {
    
}

var input = [1, 2, 3, 4, 5, 6];

function isEven(x) { 
    return x % 2 == 0; 
}

console.log(isEven(), "isEven");

console.log(filter(input, isEven)); // [2, 4, 6]*/