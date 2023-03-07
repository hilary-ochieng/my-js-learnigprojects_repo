#!/bin/bash

//a js code that multiplies input (num) by 1 - 12


const num = parseInt(prompt("Enter number: "));//input from user

for(let count = 1; count <= 12; count++){

    const product = num * count;

    console.log(product);//displasys only answers

    console.log(`${num} x ${count} = ${product}`);//displays the working 2gather wd answer
}

