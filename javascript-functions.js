// JavaScript Functions 7/21/2023

// functions give control over when code executes
// functions are reusable

// functions are neutral, they produce an output

// encapsulation - code machines (functions) should not rely on outside data other than what you as a developer provide as input

// arrow functions

// anatomy of a function
// var declaration - const
// name - camelCase, communicates intent
// assignment operator
// parents - behavior or action
// arrow syntax
// curly braces - executable code
// logic
// return

// const coffeeMaker = () => {
//   return "coffee is made"
// }

// console.log(coffeeMaker())
// undefined - primitive data type
// coffee is made

// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// function invocation, invoking a function, calling a function
// coffeeMaker()

// parameters

// const coffeeMaker = (coffeeType) => {
//   return `${coffeeType} is made`
// }

// parameters get their values as an argument in the function invocation
// console.log(coffeeMaker())
// undefined is made

// console.log(coffeeMaker("spicy coffee"))
// spicy coffee is made

// console.log(coffeeMaker("donut shop coffee"))
// console.log(coffeeMaker("cafe bustelo"))

// var myCoffee = "chocolate mint coffee"

// console.log(coffeeMaker(myCoffee)) // added a layer of abstraction
// console.log(coffeeMaker("chocolate mint coffee"))

// console.log(coffeeType)
// ReferenceError: coffeeType is not defined

// user can specify the coffee they want
// user pick a size of coffee - small, med, large
// result is the coffee order - confirm the type of coffee and the price
// small - $4, med - $5, large - $6

// pseudo code - writing out your process is reg words

// input - coffeeType, coffeeSize
// output - small "The coffeeType is $4", medium "The coffeeType is $5", large "The coffeeType is $6"

// need to make a decision on the coffee size - conditional statement
// depending on the size the price will be 4, 5, 6 dollars - decision
// include the coffeeType in the output - string interpolation

// const coffeeMaker = (coffeeType, coffeeSize) => {
//   if (coffeeSize === "small") {
//     return `The ${coffeeType} is $4.`
//   } else if (coffeeSize === "medium") {
//     return `The ${coffeeType} is $5.`
//   } else if (coffeeSize === "large") {
//     return `The ${coffeeType} is $6.`
//   } else {
//     return "Something went wrong."
//   }
// }

// console.log(coffeeMaker("Spicy coffee", "small"))
// The Spicy coffee is $4.
// console.log(coffeeMaker("cafe bustelo", "medium"))
// The cafe bustelo is $5.
// console.log(coffeeMaker("chocolate mint coffee", "large"))
// The chocolate mint coffee is $6.

// const coffeeMaker = (coffeeType, coffeeSize) => {
//   if (coffeeSize.toLowerCase() === "small") {
//     return `The ${coffeeType} is $4.`
//   } else if (coffeeSize.toLowerCase() === "medium") {
//     return `The ${coffeeType} is $5.`
//   } else if (coffeeSize.toLowerCase() === "large") {
//     return `The ${coffeeType} is $6.`
//   } else {
//     return "Something went wrong."
//   }
// }
// console.log(coffeeMaker("Donut shop", "Small"))
// The Donut shop is $4.
// console.log(coffeeMaker("chocolate mint coffee", "LARGE"))

// const coffeeMaker = (coffeeType, coffeeSize.toLowerCase()) => {
//   if (coffeeSize === "small") {
//     return `The ${coffeeType} is $4.`
//   } else if (coffeeSize === "medium") {
//     return `The ${coffeeType} is $5.`
//   } else if (coffeeSize === "large") {
//     return `The ${coffeeType} is $6.`
//   } else {
//     return "Something went wrong."
//   }
// }

// console.log(coffeeMaker("Donut shop", "Small"))
// SyntaxError: Invalid destructuring assignment target

// var coffeeSize.toLowerCase() = "small" this doesn't work

const coffeeMaker = (coffeeType, coffeeSize) => {
  // coffeeSize.toLowerCase() - this doesn't work as this method is an accessor
  let downcasedCoffeeSize = coffeeSize.toLowerCase()
  // this works since we are creating a new variable holding the downcased value
  if (downcasedCoffeeSize === "small") {
    return `The ${coffeeType} is $4.`
  } else if (downcasedCoffeeSize === "medium") {
    return `The ${coffeeType} is $5.`
  } else if (downcasedCoffeeSize === "large") {
    return `The ${coffeeType} is $6.`
  } else {
    return "Something went wrong."
  }
}

console.log(coffeeMaker("Donut shop", "Small"))
