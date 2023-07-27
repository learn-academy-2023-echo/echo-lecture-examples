// JavaScript Classes Lecture Notes 7/27/2023

// recipes for making objects
//   - data aka ingredients
//   - action what to do with ingredients aka behavior

//  Structure and Syntax
// class  - keyword reserved for declaring a class
// class names use PascalCase

// recipeBook versus RecipeBook

//  basic syntax:   class + NameOfClass + {}

// class Car {

// }

// constructor()

// class Car {
//   constructor() {
//     this.make = "Subaru"
//     this.model = "Crosstrek"
//     this.year = 2016
//     this.color = "Blue"
//   }
// }

// instantiation - creating an instance of a class (aka an object)
// use the new keyword to do this

// let myCar = new Car()
// console.log(myCar)
// Car { make: 'Subaru', model: 'Crosstrek', year: 2016, color: 'Blue' }

// parameter - allow us to pass in values of these key-value pairs  - in contructor

// class Car {
//   constructor(makeString, modelString, yearNumber, colorString) {
//     this.color = colorString
//     this.make = makeString
//     this.model = modelString
//     this.year = yearNumber
//   }
// }

// let myDreamCar = new Car("Porsche", "Boxter", 2024, "Silver")
// console.log(myDreamCar)
// Car { make: 'Porsche', model: 'Boxter', year: 2024, color: 'Silver' }
// Car { color: 'Silver', make: 'Porsche', model: 'Boxter', year: 2024 }

// the ORDER the arguments are passed is IMPORTANT.

// let myDreamCar = new Car(2024, "Silver", "Subaru", "Forester")
// console.log(myDreamCar)
// Car { make: 2024, model: 'Silver', year: 'Subaru', color: 'Forester' }

// console.log(myDreamCar.model)
// Boxter

// Custom Methods

class Car {
  constructor(makeString, modelString, yearNumber, colorString) {
    this.color = colorString
    this.make = makeString
    this.model = modelString
    this.year = yearNumber
    this.isOperational = true
  }
  carBoasting() {
    return `My ${this.make} ${this.model} is super cool!`
  }
  brokeDown() {
    this.isOperational = false
    this.make = "totaled"
  }
  jumpMaster() {
    this.isOperational = true
  }
}

let newCar = new Car("Ford", "Mustang", 2024, "Red")
// console.log(newCar)
// Car { color: 'Red', make: 'Ford', model: 'Mustang', year: 2024 }
// console.log(newCar.carBoasting())
// My Ford Mustang is super cool!
// console.log(newCar.model)
// Mustang
newCar.brokeDown() // calling the brokeDown method, it's an action
// console.log(newCar)
// Mustang
// Car {
//   color: 'Red',
//   make: 'Ford',
//   model: 'Mustang',
//   year: 2024,
//   isOperational: "false"
// }
newCar.jumpMaster()
// console.log(newCar)
// Car {
//   color: 'Red',
//   make: 'Ford',
//   model: 'Mustang',
//   year: 2024,
//   isOperational: true
// }

newCar.brokeDown()
console.log(newCar)
// Car {
//   color: 'Red',
//   make: 'totaled',
//   model: 'Mustang',
//   year: 2024,
//   isOperational: false
// }

newCar.carBoasting()
// My totaled Mustang is super cool!
console.log(newCar)
