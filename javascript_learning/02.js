let age = 22;
console.log(typeof age);
age = age + "";
// age = String(age) --> Another way to convert or change the datatype
console.log(typeof age);
// Tht's how you can change a number datatype into string datatype -- like this you can change the datatypes into string or number

// Strings Concatenation -- it means to merge (jorna)

let string1 = "Mahesh"
let string2 = "Hatwal"

let fullName = string1 + " " + string2

console.log(fullName);

// My name is Mahesh and my age is 25 

let myAge = 24
let myName = "Mahesh"

// let aboutMe = "My name is " + myName + " and my age is " + age  --> Another way is below

let aboutMe = `My name is ${myName} and my age is ${myAge}`

console.log(aboutMe);
