// Variable to start gathering data from confirms
var generateBtn = document.querySelector("#generate");


// Write password to the password input
function writePassword() {
  var password = generatePW();
  var passwordSpot = document.querySelector('#password');
  passwordSpot.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePW(){
  var passwordLength = prompt('Enter number between 8 and 128 characters for password length');
  while ((passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLength) === true)) {
    passwordLength = prompt(" Must be a number! 8-128")
  }
  // confirm the character selections of the user
  var isSpecials = confirm("Would you like to include special characters?")
  var isNumbers = confirm("Would you like to include Numbers?")
  var isUppercase = confirm("Would you like to include uppercase letters?")
  var isLowercase = confirm("Would you like to include lowercase letters?")
  
  // store characters in variables to be chosen by the user
  var specys = "~!@#$%^&*_+|"
  var numbys = "123456789"
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowers = "abcdefghijklmnopqrstuvwxyz"
  
  // Variable to store selections
  var characterSelections = ''
  var newPassW = ''
// if statements for character selections
  if(isSpecials === true){
    characterSelections = characterSelections.concat(specys)
  }

  if(isNumbers === true){
    characterSelections = characterSelections.concat(numbys)
  }

  if(isUppercase === true){
    characterSelections = characterSelections.concat(uppers)
  }

  if(isLowercase === true){
    characterSelections = characterSelections.concat(lowers)
  }

  function random(max) {
    return [Math.floor(Math.random() * max)]
  }
  // formula to sort through selections then generate password
  for (var i = 0; i < passwordLength; i++) {
    newPassW = newPassW.concat(characterSelections.charAt(random(characterSelections.length-1)))
  }

  return newPassW
}



