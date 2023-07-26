// JavaScript Objects Lecture Notes 7/26/2023

// Primative data types - can't be broken down
// Collection of data - ie, array. can be broken down into smaller parts
// Non-primative data types are objects

// CSS
// h1 {
//   background-color: "yellow"
// }

// Object Syntax
// collection of key-value pairs
{
  key: "value"
}
// key - Symbol, unique identifier, used only in objects
// value can be any data type

const myObject = {
  key1: "value",
  key2: "another value",
  key3: "some other value",
}
// console.log(myObject)
// { key1: 'value', key2: 'another value', key3: 'some other value' }

// array use Bracket Notation

// objects we use Dot Notation!
// objectName.key

// console.log(myObject.key2)
// another value

const person = {
  firstName: "Walter",
  lastName: "White",
  city: "Albuquerque",
  occupation: "Chemistry Teacher",
  contact: {
    phone: "404 - 555 - 1234",
    email: "heisenberg@example.com",
    venmo: "@BlueSky-3",
  },
}

// console.log(person.lastName)
// White

// Nested objects need entire pathway to access the value
// console.log(person.email)
// // undefined
// console.log(person.contact.email)
// // heisenberg@example.com
// console.log(person.contact.phone)
// console.log(person.contact.venmo)
// // 404 - 555 - 1234
// // @BlueSky-3

// console.log(person.contact)
// {
//   phone: '404 - 555 - 1234',
//   email: 'heisenberg@example.com',
//   venmo: '@BlueSky-3'
// }

// destructuring - unpacking the pathway of an object and assigning it to a variable.

// const { phone } = person.contact
// console.log(phone)
//404 - 555 - 1234

const { phone, email, venmo } = person.contact
// console.log(venmo)
// console.log(email)
// console.log(phone)
// @BlueSky-3
// heisenberg@example.com
// 404 - 555 - 1234

// Methods

//  definition: a function that belongs to an object

// const numberObject = {
//   num1: 5,
//   num2: 8,
//   num3: 15,
//   // can't use arrow syntax here
//   addUp: function () {
//     return num1 + num2 + num3
//   },
// }

// console.log(numberObject)
// { num1: 5, num2: 8, num3: 15, addUp: [Function: addUp] }
// console.log(numberObject.addUp)
// [Function: addUp]

// THIS - keyword in JS references the name of the object when you are INSIDE the object.

// const numberObject = {
//   num1: 5,
//   num2: 8,
//   num3: 15,
//   // can't use arrow syntax here
//   addUp: function () {
//     return this.num1 + this.num2 + this.num3
//   },
// }
// console.log(numberObject.addUp())
// // 28
// // method doesn't exist outside our object
// console.log(addUp())
// // ReferenceError: addUp is not defined

//  Array of Objects

const pets = [
  { name: "Luna", type: "dog", age: 2 },
  { name: "Pamela", type: "cat", age: 1 },
  { name: "Peanut", type: "dog", age: 4 },
  { name: "Kevin", type: "cat", age: 9 },
]
// console.log(pets.length)
// 4

// console.log(pets[0])
// { name: 'Luna', type: 'dog', age: 2 }

// console.log(pets.name)
// undefined
// console.log(pets.name[0])
// TypeError: Cannot read properties of undefined (reading '0')

// console.log(pets[0].name)
// Luna

// get all the pet names
// iteration, .map

const petNames = pets.map((value) => {
  return value.name
})[
  // console.log(petNames)
  ("Luna", "Pamela", "Peanut", "Kevin")
]

const getNames = (arrayOfObjects) => {
  return arrayOfObjects.map((value) => {
    return value.name.toUpperCase()
  })
}

console.log(getNames(pets))[
  // [("Luna", "Pamela", "Peanut", "Kevin")]
  ("LUNA", "PAMELA", "PEANUT", "KEVIN")
]
