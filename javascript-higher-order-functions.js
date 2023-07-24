// JavaScript Higher Order Functions Lecture 7/24/2023

// Built-in Methods
//  premade functions that are easily invokable

// console.log(true.toUpperCase())
//  TypeError: true.toUpperCase is not a function
// Not the correct DATA TYPE

// Function
//  reusable block of code
//  set of instructions
// always returns an output(some data)
// missing return  ==> get undefined

// Parameter
//  variable that lives within the function definition - it is a placeholder for the data that will be passed into the function

// Argument
// the actual data passed in when you call the function

// P for parameter and placeholder
// A for argument and actual data

// Iteration can be performed on:
//  - strings
//  - arrays

// Syntactical Sugar - big concepts wrapped up in easy to use syntax.

// What is a High Order function - a function that takes a function as an argument
//  - built-in methods
//  - iteration - they are more efficient than for loops
//  - very specific circumstances

//  Specifically ARRAY methods

// const showsArray = [
//   "Justified",
//   "Gilmore Girls",
//   "The Witcher",
//   "Is it Cake",
//   "Ozark",
//   "Dexter",
// ]
// const numsArray = [5, 8, 15, 36, 42]

// .forEach()
//  - executes some action ONCE PER ITEM  (similar to a for loop)
// - HOFs take anonymous function as argument

// showsArray.forEach(() => {
//   // console.log("Hey Echo!")
// })
// anonymous function syntax: () => {}

//  ANONYMOUS FUNCTION ALSO TAKES AN ARGUMENT

// 3 parameters that are built in - value, index, array
//  the value parameter is REQUIRED

// showsArray.forEach((show) => {
//   // console.log(`You like the show ${show}`)
// })
// output: You like the show Justified
// You like the show Gilmore Girls
// You like the show The Witcher
// You like the show Is it Cake
// You like the show Ozark
// You like the show Dexter

// showsArray.forEach((value, index) => {
//   console.log(`You like the show ${value}. it is at index ${index}`)
// })
// output: You like the show Justified. it is at index 0
// You like the show Gilmore Girls. it is at index 1
// You like the show The Witcher. it is at index 2
// You like the show Is it Cake. it is at index 3
// You like the show Ozark. it is at index 4
// You like the show Dexter. it is at index 5

// showsArray.forEach((value, index, array) => {
//   // console.log(
//   //   `You like the show ${value}. it is at index ${index} in the array that includes ${array}`
//   // )
// })
// output: You like the show Justified. it is at index 0 in the array that includes Justified,Gilmore Girls,The Witcher,Is it Cake,Ozark,Dexter
// You like the show Gilmore Girls. it is at index 1 in the array that includes Justified,Gilmore Girls,The Witcher,Is it Cake,Ozark,Dexter
// You like the show The Witcher. it is at index 2 in the array that includes Justified,Gilmore Girls,The Witcher,Is it Cake,Ozark,Dexter
// You like the show Is it Cake. it is at index 3 in the array that includes Justified,Gilmore Girls,The Witcher,Is it Cake,Ozark,Dexter
// You like the show Ozark. it is at index 4 in the array that includes Justified,Gilmore Girls,The Witcher,Is it Cake,Ozark,Dexter
// You like the show Dexter. it is at index 5 in the array that includes Justified,Gilmore Girls,The Witcher,Is it Cake,Ozark,Dexter

// Three basic parameters in hofs: Value (required), index, array.  ORDER matters!

// numsArray.forEach((value, index, array) => {
//   console.log("value: ", value)
//   console.log("index: ", index)
//   console.log("array: ", array)
// })

// const numsArray = [5, 8, 15, 36, 42]

// numsArray.forEach((hippo, turtle, banana) => {
//   console.log("value: ", hippo)
//   console.log("index: ", turtle)
//   console.log("array: ", banana)
// })

// const showsArray = [
//   "Justified",
//   "Gilmore Girls",
//   "The Witcher",
//   "Is it Cake",
//   "Ozark",
//   "Dexter",
// ]

// showsArray.forEach((showName) => {
//   return `${showName}`
// })

// MAP
// iterates over each element returns NEW ARRAY that's the same length
// assign our map to a new variable
//  transforming or displaying each of the values in array

// const threesArray = [1, 2, 3, 4, 5]

// const multiplyByThree = threesArray.map((value) => {
//   return value * 3
// })
// console.log(multiplyByThree)
// console.log(threesArray)
// output: [ 3, 6, 9, 12, 15 ]
// [ 1, 2, 3, 4, 5 ] doesn't change original array

// when using only 1 parameter, you don't need the parentheses in the anonymous function

// const multiplyByThree = threesArray.map(value => {
//   return value * 3
// })

// One liners:  don't need {} or return keyword

// const multiplyByThree = threesArray.map(value => value * 3)

const evenOrOdd = (arrayOfNums) => {
  return arrayOfNums.map((value) => {
    if (value % 2 === 0) {
      return `${value} is even`
    } else if (value % 2 === 1) {
      return "odd"
    } else {
      return "something went wrong"
    }
  })
}
const numsArray = [5, 8, 15, 36, 42]

// console.log(evenOrOdd(numsArray))
// output: [ 'odd', 'even', 'odd', 'even', 'even' ]

//  Filter
// has a built-in IF STATEMENT
// returns a new array that is a subset of the original array

const showsArray = [
  "Justified",
  "Gilmore Girls",
  "The Witcher",
  "Is it Cake",
  "Ozark",
  "Dexter",
]

const searchT = showsArray.filter((value) => {
  return value.includes("t") || value.includes("T")
})
// console.log(searchT)
// Output: [ 'Justified', 'The Witcher', 'Is it Cake', 'Dexter' ]

console.log(typeof false)
