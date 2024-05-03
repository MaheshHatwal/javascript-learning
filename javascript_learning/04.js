// if else condition

let age = 18

if (age >= 18) {
    console.log("You are adult");
} else {
    console.log("You are teenager");
}

let num = 15

if (num%2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// falsy values 

// false , "" , null , undefined , 0 -- ( you can put each value in the varible and it will return else statement ) 

// truthy values

// varibles mae koi values hui tou woh TRUTHY values hain 

let firstName = false;

if (firstName) {
    console.log(firstName);
} else {
    console.log("firstName is empty");
}

// ternary operator / conditional operator

let $age = 16

let drink = $age >= 15 ? "coffee" : "milk"

console.log(drink);
