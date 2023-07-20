// JavaScript Arrays Lecture Notes 7/20/2023

//  Array - list of items
// Syntax - wrapped in square brackets,  items separated by commas.
// element - each item is referred to as an element

;[1, 2, 3, 4, 5]

// zero-indexed
// can use .length property on arrays

let cities = [
  "San Diego",
  "Austin",
  "New York",
  "Dallas/FW",
  "Wichita",
  "Chicago",
]

// console.log(cities[4])
// console.log(cities[0])
// console.log(cities[2])

// console.log(cities[8]) //undefined
// console.log((cities[8] = "Phoenix"))

// console.log(cities)

// // Reassign values
// cities[3] = "San Francisco"
// console.log(cities)

let mixedData = ["Kevin", 42, true, null, "hippo", false, 15, "vampire"]
// console.log(mixedData[3])

// mixedData[7] = "bear"
// console.log(mixedData)

// console.log(mixedData.length)
// can set variable to empty array
let pets = []

// Built-in Methods for Arrays

// Setters - aka mutators - alter the original array
// Getters - aka accessors - don't change the original array

let animals = [
  "cat",
  "turtle",
  "red panda",
  "fish",
  "dog",
  "regular panda",
  "kung-fu panda",
]

// Setters

// .push() - adds one item to the end of the Array.  Takes an element as an argument (passed in parentheses)

// console.log(animals.push("pig")) // returns the length
// console.log(animals) // returns the array

// // .pop() - removes the last element from the array and returns it's value; it doesn't need an argument

// console.log(animals.pop()) // pig
// console.log(animals) // full array - pig

// GETTERS:
// .concat() - concatenates 2 arrays.  Call the method on one array, pass the other array as arguments.

// console.log(animals.concat(mixedData))
// let newList = animals.concat(mixedData)
// console.log(newList)
// console.log(animals)
// console.log(mixedData)
// let newList1 = mixedData.concat(animals)
// console.log(newList1)

let someArray = [42, "Kianna", false, "Bao"]

let all = mixedData.concat(animals).concat(someArray)
// console.log(all)

// .join() - takes a delimiter, ie a space, comma, emoji, dash

let slayer = ["B", "u", "f", "f", "y"]
let buffy = slayer.join("")
console.log(buffy)
// .split() - string method.  divide into ordered list in an array

console.log(buffy.split(""))

let string = "Today it is very hot everywhere!"
// console.log(string.split(" ")) //[ 'Today', 'it', 'is', 'very', 'hot', 'everywhere!' ]

// Destructuring

//  assignment syntax that allows us to unpack values from arrays

let fullName = ["Buffy", "Summers", "Sunnydale"]
//destructure:

let [firstName, lastName, school] = fullName
// let [firstName, lastName, school] = ["Buffy"]
console.log(firstName)
console.log(lastName)
console.log(school)
