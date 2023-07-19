// JAVASCRIPT CONDITIONALS LECTURE 7/19/23

// Javascript Conditionals
  //  AKA - Decision Trees, if/else statements, conditional statements
  // gives application the power to perform logic
    // logic via evaluation resulting in a boolean to trigger a response 
    // evaluation rely on comparisons - tools called javascript operators 


//  Equality Operators - Asks, are these values the same? 

  // == loose equality
    // console.log(21 == "21")
    // output: true

    // console.log(21 == 21)
    // output: true 

  // === strict equality
  // console.log(21 === "21")
  //   // output: false
  // console.log(21 === 21)
    // output: true

// Relational Operators - Asks, how do these values relate arithmathically 
  //  > greater than
  // < less than
  // >= greater than or equal to 
  // <= less than or equal to 


  let justinsFaveNumber = 1738 
  let fettysFaveNumb = 1738

  // console.log(justinsFaveNumber < myfaveNum)
  //   // output: false
  
  // console.log(justinsFaveNumber > myfaveNum)
  //   // output: true

  // console.log(justinsFaveNumber <= fettysFaveNumb)
  //   // output: true 

  // console.log(myfaveNum >= 4)
    // output: true

  // Logical Operators - Allows us to evluate multiple things in one condition. Asks is this thing  AND this thing true about my data, Asks is this thing OR this thing true about my data.
  
    // && logical AND
      // picky - needs both statemts to be true to get a response of true.
      let myfaveNum = 7
      fettysFaveNumb = 0 

      // console.log(fettysFaveNumb === 0 && fettysFaveNumb > 6)
      //   // output: false 
      // console.log(fettysFaveNumb === 0 && fettysFaveNumb > -6)
        // output: true 
      // console.log(myfaveNum <= 10 && myfaveNum * 2 === 14)
        // output: true 

    // || logical OR 

      // console.log(fettysFaveNumb > 2 || fettysFaveNumb + 4 >= 1 || myfaveNum === 55)
        // output: true
      let kobe = "The GOAT"
      let kingJames = 23

      // console.log( kobe === "The Goat" || kingJames >= 24 || myfaveNum > kingJames)
        // output: false
  
  // ! BANG operator 
    // uses negation - flips the truthiness or the falsiness of a value
    // logical opposite

  // console.log(kobe === "The GOAT")
    // output: true
  // console.log(!kobe === "The GOAT")
    // output: false

    let melloTheGoat = false 

  // console.log(myfaveNum !== 7)
    //output: false

  // console.log(melloTheGoat === !kobe)
    //output: false 

  // console.log(!melloTheGoat === kobe)
    // output: false 

  // console.log(!melloTheGoat)
    // output: true


// Conditionals 
  // made up of if, else statements 

  // IF statement starts our conditional, passes and evaluation inside (). IF the value evaluates to true an action will trigger in response. The action is wrapped in {}

  let orderTotal = 75

  // if (orderTotal === 75) {
  //   console.log(orderTotal - 5)
  // }

  // output: 70 

   orderTotal = 2000

  // if (orderTotal === 75) {
  //   console.log(orderTotal - 5)
  // } else {
  //   console.log("Sorry, no discount for you!")
  // }

  // output: Sorry, no discount for you!

  // if (orderTotal === 75) {
  //   console.log(orderTotal - 5)
  // } else if ( orderTotal >= 100){
  //   console.log(orderTotal / 2)
  // }else {
  //   console.log("Sorry, no discount for you!")
  // }

  // String Interpolation - a string that allow data to be inject. Uses ``

  orderTotal = 20

  if (orderTotal === 75 || orderTotal === 20) {
    console.log(`Its our Sunny&75 Sale, you get $5 off your total is now ${orderTotal - 5}`)
  } else if ( orderTotal >= 100){
    console.log(`Its our HundoSaves Event, you get half off your total. Your told is now ${orderTotal / 2 }`)
  } else if ( orderTotal <= 10) {
    console.log("Thanks for shopping with us, let us send you some goodies!")
  } else {
    console.log("Sorry, no discount for you!")
  }