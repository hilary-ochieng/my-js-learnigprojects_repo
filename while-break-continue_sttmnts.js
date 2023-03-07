#!/bin/bash

/programme that terminates whin input is above 100, requests for another number when input is -ve or double digit, prints the number(input) if single digit(using while, break and continue statement)
while(true){

  let num = parseInt(prompt("Enter number here: "));

   if(num > 100){
      break;
  }

   if(num < 0 || num >=10){

      continue;
  }
  if(num <10 && num >=0){

      console.log(num);
  }
