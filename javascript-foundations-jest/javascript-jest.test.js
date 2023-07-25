// JavaScript Testing with Jest

// Jest is a testing framework
  // framework is a collection of files managed by something called Yarn

// Yarn is a package manager for javascript that contains code being shared from other developers
  // $ yarn add jest - command to add jest 

// TDD(Test Driven Development) - RED -- GREEN -- REFACTOR
  // RED
    // write the test
    // run our test suite to see a failing test (good failure)

  //GREEN
    // write the code
    // run your test to see if the code makes the test pass ($ yarn jest)

  // REFACTOR if necessary 


  // Prompt: Create a function called greeter that returns a string that say "Hi, Echo 2023!"

  // iput: none
  // output: "Hi, Echo 2023!"


// a describe method that lists the name of the function
  describe("greeter", () => {
  // The "it" method is nested inside of the describe block and give a discription of what the function is goin to do (you can get it from the prompt)
    it("returns a string that say Hi, Echo 2023!", () => {
  // The expect will invoke the function and compare the result to a predetermined output using the .toEqual matcher (you and think out .toEqual like ===)
      expect(greeter()).toEqual("Hi, Echo 2023!")
    })
  })

  // test result: ReferenceError: greeter is not defined (GOOD FAILURE)


  const greeter = () => {
    return "Hi, Echo 2023!"
  }

  // test result: PASS 


  // Prompt: Create a function that will log "help others" if you understand or "ask questions" if you do not. 

  // input: "yes"
  // output: "help others"

  //input: "no"
  //output: "ask questions"

  describe("doYouUnderstand", () => {
    it("log help others if you understand or ask questions if you do not", () => {
      expect(doYouUnderstand("yes")).toEqual("help others")
      expect(doYouUnderstand("no")).toEqual("ask questions")
    })
  })

  // test result:  ReferenceError: doYouUnderstand is not defined

  //Psuedocode 
  // create a function that takes a string as a parameter
  // write a conditional to evaluate if the string equals "yes"
    // if yes return "help others"
  // write a conditional to evaluate if the string equals "no"
    // if no return "ask questions"
   
  const doYouUnderstand = (string) => {
    if(string === "yes"){
      return "help others"
    } else if (string === "no"){
      return "ask questions"
    }
  }



  // Prompt: Create a function that takes in an array and a string and appends the string to the end of the array. 
  
  // input: ["takes notes", "pay attention", "take breaks"], "ask questions"
  // output: ["takes notes", "pay attention", "take breaks", "ask questions"]


  describe("becomeADeveloper", () => {
    it("adds ask questions to the end of an array", () => {
      let developersArray = ["takes notes", "pay attention", "take breaks"]
      let developerString = "ask questions"
      let result = ["takes notes", "pay attention", "take breaks", "ask questions"]
      expect(becomeADeveloper(developersArray, developerString)).toEqual(result)
    })
  })

//  test result: ReferenceError: becomeADeveloper is not defined (GOOD FAILURE)

//Pseudocode: 
//  create a function that take the parameters array and string
// append the string to the end of the array using .concat  

const becomeADeveloper = (array, string) => {
  return array.concat(string)
}