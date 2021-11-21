// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //criteria variables
  var lowerCase = window.prompt ("Do you want lowercase letters? yes or no")
  var upperCase = window.prompt ("Do you want upppercase letters? yes or no")
  var numeric = window.prompt ("Do you want numeric values? yes or no")
  var special = window.prompt ("Do you want special characters? yes or no")
  var length = window.prompt ("How long should the password be? (8-128)")
  
  
  var password = generatePassword(length, lowerCase, upperCase, numeric, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length, lowerCase, upperCase, numeric, special) {
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
  var password = ""



  for (var i=0; i < length;) {
    if (lowerCase === "yes" && i < length) {
      password +=alphabetLower[Math.floor(Math.random()* alphabetLower.length)]
      i++
    }

    if (upperCase === "yes" && i < length) {
      password +=alphabetUpper[Math.floor(Math.random()* alphabetUpper.length)]
      i++
    }
    if (numeric === "yes" && i < length) {
      password +=numbers[Math.floor(Math.random()* numbers.length)]
      i++
    }
    if (special === "yes" && i < length) {
      password +=characters[Math.floor(Math.random()* characters.length)]
      i++
    }


  }

  console.log(password)


}