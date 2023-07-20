// JAVASCRIPT LOOPS 7/20/23

//Scope refers to where a varaiable can be accessed
  // 'var' declared variables can be both reassigned and redeclared 
  // global scope - the variable can be accessed in or outside of the block {}

  // if(true){
  //   var myDog = "Mazikeen"
  // }
  // console.log(myDog)

  if(true){
    var myDog = "Mazikeen"
    // console.log(myDog)
  }

  // 'let' declared varaiables these only be reassigned 
  // block scope - the variable can only the accessed inside block it was defined in 

  if(true){
    let megsDog = "Sully"
    // console.log(megsDog)
  }
// output: Sully

if(true){
  let megsDog = "Sully"
}
// console.log(megsDog)
    
const trishsCat = "Kevin"
// console.log(trishsCat)
  
//Loops 

// are really good at counting
// its counting actions can line up with array indexes, making it possible to access every element in an array

//Creating a Loop
  // Where we are starting (the initialation)
  // Where we are stopping (the conditon)
  // How will we get from start to stop (the incrementation)

  let index = 0 // start
  
  index < 5 // stop (condition)

  index = index + 1 // incrementaion 

  // for (let index = 0; index < 5; index = index + 1){

  // }

  for (let i = 0; i < 5; i++){
      // console.log(i)
  }

  // output: 
// 0
// 1
// 2
// 3
// 4

const numsArray = [4, 5, 6, 7, 8, 9]

// console.log(numsArray[0])
// console.log(numsArray[1])
// console.log(numsArray[2])

for(let i = 0; i < numsArray.length; i++){
  // console.log("index:", i, "value:" , numsArray[i])
}

let randomNumArray = [89, 74, 3, 44, 12, 33]

for(let i = 0; i < randomNumArray.length; i++){
  if ( randomNumArray[i] % 2 !== 0 ) {
    // console.log(`${randomNumArray[i]} is an odd number`)
  }
}

const aLongSentence = "A drove of deteremined devs dive into the daring depths of Deanna's lecture about loops."

let count = 0
for(let i = 0; i < aLongSentence.length; i++){
  if(aLongSentence[i].toUpperCase() === "D") {
    count++
  }
}
console.log(count)