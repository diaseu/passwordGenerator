//Initial arrays defined
const lowerArray = "abcdefghijklmnopqrstuvwxyz"
const upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersArray = "0123456789"
const symbolsArray = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/"

document.getElementById('generate').addEventListener('click', () => {

  // Initial variables defined
  let pwLength = 0
  let lowerCase = false
  let upperCase = false
  let numbers = false
  let symbols = false
  let chosenArray = []
  let chosenCount = 0
  let finalPW = []

  // PW length function
  function lengthInput() {
    pwLength = prompt("how long do you want your password?\n(no less than 8 and no more than 128 characters)")
    if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
      alert('Invalid input')
      lengthInput()
    }
  }
  lengthInput()
  console.log(pwLength)

  // Character Type function
  function chooseType() {
    lowerCase = confirm("Do you want the password to use lower case?")
    upperCase = confirm("Do you want the password to use upper case?")
    numbers = confirm("Do you want the password to use numbers?")
    symbols = confirm("Do you want the password to use symbols?")


    // if none selected, make they choose again
    if (!lowerCase && !upperCase && !numbers && !symbols) {
      alert('Please select at least character type')
      chooseType()
    }

    // if true, add to chosenArray
    if (lowerCase) {
      chosenCount++
      chosenArray += lowerArray
      finalPW += lowerArray[Math.floor(Math.random() * lowerArray.length)]
    }
    if (upperCase) {
      chosenCount++
      chosenArray += upperArray
      finalPW += upperArray[Math.floor(Math.random() * upperArray.length)]
    }
    if (numbers) {
      chosenCount++
      chosenArray += numbersArray
      finalPW += numbersArray[Math.floor(Math.random() * numbersArray.length)]
    }
    if (symbols) {
      chosenCount++
      chosenArray += symbolsArray
      finalPW += symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
    }
  }
  chooseType()

  // Just to check if they work
  console.log(`You chose ${chosenCount} kinds of character types`)
  console.log(`Chosen Array: ${chosenArray}`)

  // randomize the pw for length from array
  for (let i = 0; i < (pwLength - chosenCount); i++) {
    finalPW += chosenArray[Math.floor(Math.random() * chosenArray.length)]
  }

  // Pass the pw 
  let password = document.getElementById("password")
  password.textContent = finalPW

})