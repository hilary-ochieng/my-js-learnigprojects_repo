#!/bin/bash

//programme to display all the even numbers between a - b

let a = parseInt(prompt("Even numbers from: "));
let b = parseInt(prompt("Even numbers to: "));

console.log("All even numbers from a to b")
for (let i=a; i<=b; i++)
{
  if(i%2==0){
    console.log(i)
  }
}


//programme to display all the odd numbers between c - d

let c = parseInt(prompt("Odd numbers from: "));
let d = parseInt(prompt("Odd numbers to: "));

console.log("All odd numbers from c to d")
for (let i=c; i<=d; i++)
{
  if(i%2!=0){
    console.log(i)
  }
}

