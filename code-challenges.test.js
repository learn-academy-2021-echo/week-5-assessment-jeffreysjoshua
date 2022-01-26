// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("coded", () => {

  const secretCodeWord1 = "Lackadaisical"
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook"
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric"
  // Expected output: "3cc3ntr1c"

    it("takes in a string and returns a coded message.", () => {

      // set expect statement to equal a coded version of the string
      expect(coded(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(coded(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(coded(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
  })
// Note: running Jest produces desired Red message that function is not defined
//
//
// // b) Create the function that makes the test pass.

// create a function called coded
const coded = (string) => {
// create new variable to store array version of string
  let result = string.split("")
// iterate over the array
  for (let i=0; i < result.length; i++){
// create conditional statements to check for vowles and change to coded character
    if (result[i] === "a" || result[i] === "A"){
      result[i] = 4
    } else if(result[i] === "e" || result[i] === "E"){
      result[i] = 3
    } else if(result[i] === "i" || result[i] === "I"){
      result[i] = 1
    } else if(result[i] === "o" || result[i] === "O"){
      result[i] = 0
    } else {
      result[i] = result[i]
    }
  }
  // create a return variable that joins the coded array.
 let final = result.join('')
 return final
}
// Note: function produces green "passed" message. Function refactored, as needed.



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("checkLetter", () => {

  const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
  const letterA = "a"
  // Expected output: ["Apple", "Banana", "Orange"]
  const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
  const letterE = "e"
  // Expected output: ["Cherry", "Blueberry", "Peach"]

    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {

      // set expect statement to equal an array with the lowest and highest number of the input array
      expect(checkLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(checkLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
  })
//
//
//
// // b) Create the function that makes the test pass.

// create a function that accepts two arguments
const checkLetter = (array, letter) => {

// create a return array to push values into.
 let newArray = []
// iterate over the array
 for (let i=0; i < array.length; i++){
// check if lowercased version of word contains the letter of interest
   if (array[i].toLowerCase().includes(letter)){
// push value into return array if it does contain letter of interest
     newArray.push(array[i])
   }
 }
  return newArray
}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("fullCasa", () => {

  const hand1 = [5, 5, 5, 3, 3]
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4]
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4]
  // Expected output: false


    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {

      // set expect statement to equal a boolean value depending on if it is a full house
      expect(fullCasa(hand1)).toEqual(true)
      expect(fullCasa(hand2)).toEqual(false)
      expect(fullCasa(hand3)).toEqual(false)

    })
  })




// b) Create the function that makes the test pass

// create a funtion that accepts one argument
const fullCasa = (array) => {

// create 3 seperate arrays to store instances of specific values
  let newArray1 = []
  let newArray2 = []
  let newArray3 = []
// iterate over input array
  for (let i=0; i< array.length; i++){
// push value into first array if it is not already there
    if (!newArray1.includes(array[i])){
      newArray1.push(array[i])
// push value into second array if it has already been pushed into first array
    } else if (!newArray2.includes(array[i])){
      newArray2.push(array[i])
// if value has came up a third time, push it into the third array
    }else{
      newArray3.push(array[i])

    }
  }
  // if array one and two have a length of two, we have one pair, if array three has a length of three, we have one tripple.
  if (newArray1.length === 2 &&  newArray2.length === 2 && newArray3.length === 1){
    return true
  } else {
    return false
  }
}
