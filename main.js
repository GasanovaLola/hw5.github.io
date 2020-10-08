// 1 +

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


//2 +

function comparisonMass(arr1, arr2) {
    var sum1 = 0;
    var sum2 = 0;
    var size = 0;

    size = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < size; i++) {
        if (+arr1[i] === arr1[i] && arr1.length > i) {
            sum1 += (+arr1[i]);
        }
        if (+arr2[i] === arr2[i] && arr2.length > i) {
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

var arr1 = [1, "io", 10, 20];
var arr2 = [3, "yuy", 11, 1];

console.log(comparisonMass(arr1, arr2));

// 3 +

function doMath(x, znak, y) {
    if (znak === "+") {
        return x + y;
    }
    else if (znak === "-") {
        return x - y;
    }
    else if (znak === "*") {
        return x * y;
    }
    else if (znak === "/") {
        return x / y;
    }
    else if (znak === "%") {
        return x % y;
    }
    else if (znak === "^") {
        return Math.pow(x, y); 
    }
    else if (znak === "") {
        return "Error";
    }
}

var x = 89;
var y = 1;
var znak = "%";

console.log(doMath(x, znak, y))

// 4 +

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

func("hello world", ['l', 'd']);

// 5

function isEven(x) { 
    return x % 2 === 0; 
}

function filter (input, isEven) {
    var newArr = [];
    for(var i = 0; i < input.length; i++){
        if(isEven(input)){
            newArr = input[i];
        }
        return newArr;
    }
}

var input = [1, 2, 3, 4, 5, 6];

console.log(filter(input, isEven)); 
