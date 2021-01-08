"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
        "1.jpg",
        "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
        "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    }
];

let productsList = products.filter(function (product) {
    if (product.photos != null) {
        if (product.photos.length != 0) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
});

console.log(productsList);