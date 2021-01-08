"use strict";

for (let i = 1; i <= 20; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
        arr.push("x");
    }
    let finalString = arr.join('');
    console.log(finalString);
}