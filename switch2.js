#!/bin/bash

//programme that creates a simple calculator(using switch statements)

let operator = prompt("Enter operator eg. + ,-, * or /:")
const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(prompt("Enter second number:"));

let answer;
   switch(operator){
       case '+':
           answer = number1 + number2;
           break;
       case '-':
           answer = number1 - number2;
           break;
       case '*':
           answer = number1 * number2;
           break;
       case '/':
           answer = number1 / number2;
           break;
       case '%':
           answer = number1 % number2;
           break;

      default:
           console.log("Invalid operation");


   }
   console.log(answer);//for answer alone
   console.log(`${number1} ${operator} ${number2} = ${answer}`)//for working and answer


