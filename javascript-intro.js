// JavaScript Intro Lecture Notes 7/19/2023

// What is JavaScript
//  - adds interaction, functionality for user to interact

// Technically JS
//  - dynamic language
//  - interpreted language
//   - scripting

//  Data Types
// 6 primative data types
//  Numbers
// Strings
// Boolean
// Undefined
// Null
// Symbol

// console.log(5 + 3)
//  to run code use node filename.js

// NUMBERS
// Integers and floats
// Do Math!  add, subtract, multiply, divide, exponents

// console.log(5 - 3)
// console.log(5 * 3)
// console.log(5 / 3)

// // Modulo - divides the first number by the second and returns the remainder
// console.log(5 % 3.5)

// console.log(5 ** 2)

// --------------
// Strings
// // console.log(hello echo) // will throw error
// console.log("hello echo")
// console.log("42")
// console.log(42)
// console.log("42" + 42)

// // Type coercion - converts a value from one data type to another.
// // String concatenation - combines two strings by using the + sign

// console.log("Hello" + " " + "Echo")
// ;("E")
// ;("Echo is awesome")

// Boolean
// true or false
// not strings

// Undefined
// variable declared but no value assigned

// Null
// lacks value

// Symbol
//  access keys in JS objects.
// -------------------------

// Variables

// declaration
//  var - global, can be reassigned

//  var name = "Tricia"
//  var name = "Kianna"

//  let - local scope, it can be reassigned
//  const - cannot be reassigned
// Name variable - use descriptive names in camelCase (thisIsCamelCaseVariableName)
// Assignment Operator - the single equal sign  =
// Assigned Value - data that you want to variable to hold.

var myFavoriteNumber = 42
console.log(myFavoriteNumber) // 42
console.log(myFavoriteNumber + 10) // 52
console.log(myFavoriteNumber)

myFavoriteNumber = 52
// console.log(myFavoriteNumber)

// const yourFavoriteNumber = 13
// console.log(yourFavoriteNumber)
// yourFavoriteNumber = 17
// console.log(yourFavoriteNumber)

let willsFavoriteNumber = 7

myFavoriteNumber = myFavoriteNumber + willsFavoriteNumber
console.log(myFavoriteNumber)

// BUILT IN METHODS

let message = "Hello World!"

// .length - tell us how many characters including spaces and punctuation
console.log(message.length)

// index - references the location of character in the string
// - computers use zero-indexing

//Bracket Notation!  access the value at particular index
console.log(message[9])

// .charAt() - returns the value at a specific index
//  - only on strings

console.log(message.charAt(9))

// .includes() - checks to see if string includes substring provided in parentheses

console.log(message.includes("lo") || message.includes("Lo"))

// .toUpperCase() or .toLowerCase()

console.log(message.toUpperCase())
