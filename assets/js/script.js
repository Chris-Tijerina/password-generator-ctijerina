// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //criteria variables
  var lowerCase = window.prompt ("Do you want lowercase letters?")
  var upperCase = window.prompt ("Do you want upppercase letters?")
  var numeric = window.prompt ("Do you want numeric values?")
  var special = window.prompt ("Do you want special characters?")
  var length = window.prompt ("How long should the password be? (8-128)")
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(lowerCase, upperCase, numeric, special, length) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
}