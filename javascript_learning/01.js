/*Intro to Variables

We can store information in the varibles 
We can use that information later
We can change the variables later but --- const variables cannot be changed 

Types of variables:

var = we can store a value or information in it and it can be changable
let = we can store a value or information in it and it can be changable
const = we can store a value or information in it and it is fixed and it cannot be change later

Important variables:

let and const

    we do not use var --because of the block scope and function scope 


"use strict"; --- restrict to mistake----


    String Indexing
    Har ek string mae har character ki ek index hoti hai jo 0 se start hoti hai 

    For suppose: let myName = "Mahesh";

    M   a   h   e   s   h
    0   1   2   3   4   5

For suppose apko ek string mae se ek character chaiye usk liye use hoti hai string indexing 

Example: I want "e" from my string "Mahesh"

 myName[3] 

    Kyun ke "e" 3 index pr hai isiliye phele varible ka naam likha phr uska index in square bracket

myName.length --- length ek property hai jis se ap varible k andr jo string hai uski length ptaa kr skte hain. --- spaces bh length mae count hoti hai

Primitive Datatypes : 
Strings "Mahesh"
number 
booleans 
null -- type of null is object -- it is a bug in javascript -- it is not fixed because if it's changes so many people will face problems 
undefined -- is ka mtlb apne ek variable khali chora hua hai, variable ki value undefined hai 
BigInt 
Symbol
*/

// trim()
// toUpperCase()
// toLowerCase()
// slice() -- start index and end index -- end wale index ko count nahee krta slice method jo bh end index doge usse ek count phele tk slice krega

let myName = "Mahesh"
console.log(myName.length);

myName = myName.trim()
console.log(myName.length);

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let newString = myName.slice(0,4)
console.log(newString); 