"use strict";

let a = 3;
let b = 2;

/**
*This function sums two numbers.
*@param {number} a - first number
*@param {number} b - second number
*@returns {number}
*/
function Sum (a, b) {
    if (isNaN(a * b)) {
        return console.error("a or b is not a number");
    } else {
        var c = a + b;
    }
    return c;
}

console.log(Sum(a, b));

/**
*This function substracts second parameter from the first one.
*@param {number} a - first number
*@param {number} b - second number
*@returns {number}
*/
function Substract(a, b) {
    if (isNaN(a * b)) {
        return console.error("a or b is not a number");
    } else {
        var c = a - b;
    }
    return c;
}

console.log(Substract(a, b));

/**
*This function multiplies two numbers.
*@param {number} a - first number
*@param {number} b - second number
*@returns {number}
*/
function Multiply(a, b) {
    if (isNaN(a * b)) {
        return console.error("a or b is not a number");
    } else {
        var c = a * b;
    }
    return c;
}

console.log(Multiply(a, b));

/**
*This function devides first parameter by second one.
*@param {number} a - first number
*@param {number} b - second number
*@returns {number}
*/
function Devide(a, b) {
    if (isNaN(a * b)) {
        return console.error("a or b is not a number");
    } else {
        var c = a / b;
    }
    return c;
}

console.log(Devide(a, b));