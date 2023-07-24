// Functions, loops, and array OH MY! 


// create a function that will multiply each element of an array by 5 

//Psuedocode (gameplan)
 // iterate through an array using a for loop
 // use function syntax

 const mult5Array = [6, 45, 92, 3, 7]
 
//  const times5 = (array) => {
//   let newArray = []
//   for ( let i=0; i < array.length; i++) {
//     return newArray.push(array[i] * 5 )
//   } 
//     return newArray
//  }

//  console.log(times5(mult5Array))

// const times5 = (array) => {
//   for ( let i=0; i < array.length; i++){
//     console.log(array[i])
//   }
// }

// console.log(times5(mult5Array))
// output: 
// 6
// 45
// 92
// 3
// 7
// undefined - this occured because we are missing our return 

// const times5 = (array) => {
//   for ( let i=0; i < array.length; i++){
//     return (array[i] * 5)
//   }
// }
// console.log(times5(mult5Array))
// output: 30 - we only received one value bc our return is inside our loop


// const times5 = (array) => {
//   let newArray = []
//   for ( let i=0; i < array.length; i++){
//    (array[i] * 5)
//   }
//   return newArray
// }

// console.log(times5(mult5Array))
// output: [] - we got an empty array bc we haven't added our modified elements to the array.

const randomArr = ["one", 4, 7, "eight"]

const times5 = (array) => {
  let newArray = []
  for ( let i=0; i < array.length; i++){
   newArray.push(array[i] * 5)
  }
  return newArray
}

// console.log(times5(mult5Array))
// output: [ 30, 225, 460, 15, 35 ]

// console.log(times5(randomArr)) 
// output: [ NaN, 20, 35, NaN ]


const cafeItems = ["matcha latte", "crepes", "frappecino", "scopes", "black coffee"]

// create a function that takes an array, accesses each element using iteration to add the string to a sentence. 

// Psuedocode(gameplan):
// input: array
// output: array of the elements added to a string
// iterate through array using for loop 
// added element to string using string interpolation ("Can I have a")

// const cafeOrder = (array) => {
//   for (let i=0; i < array.length; i++){
//     return `Can I have a ${array[i]}`
//   }
// }

// console.log(cafeOrder(cafeItems))
//output: Can I have a matcha latte - bc return is in the loop


// Psuedocode(gameplan) REVISED:
// input: array
// output: array of the elements added to a string
// iterate through array using for loop 
// added element to string using string interpolation ("Can I have a")
// declare a variable cafeArray and set it to an empty array to store our modified elements
// add modified element to the array using .push()
// return the cafeArray

const cafeOrder = (array) => {
  let cafeArray = []
  for (let i=0; i < array.length; i++){
     cafeArray.push(`Can I have a ${array[i]}`)
  }
  return cafeArray
}

console.log(cafeOrder(cafeItems))
//output: 
// [
//   'Can I have a matcha latte',
//   'Can I have a crepes',
//   'Can I have a frappuccino',
//   'Can I have a scopes',
//   'Can I have a black coffee'
// ]


