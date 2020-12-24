"use strict";
let a = +prompt("Input а: ");
let b = +prompt("Input b: ");

if (a >= 0 && b >= 0) {
    alert("Both values are positive. Their difference is " + (a - b));
} else if (a <= 0 && b <= 0) {
    alert("Both values are negative. Their product is " + (a * b));
} else if ((a * b) <= 0) {
    let c = a + b;
    alert("This values have different signs. Their sum is " + c);
} else {
    alert("Inputed values are not numbers.");
}