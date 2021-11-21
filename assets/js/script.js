
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var lowerCase = showPrompt("lowercase")
  var upperCase = showPrompt("uppercase")
  var numeric = showPrompt("numeric")
  var special = showPrompt("special")
  var length = showPrompt("length")
  if (lowerCase == "no" && upperCase == "no" && numeric == "no" && special == "no"){
    window.alert("Please make valid selections and try again")
    writePassword()
  } else {
    var password = generatePassword(length, lowerCase, upperCase, numeric, special);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Validate inputs
function showPrompt(criteria) {
  switch (criteria) {
    case "lowercase":
      var lowerCase = window.prompt("Do you want lowercase letters? yes or no")
      if (lowerCase.toLowerCase() != "yes" && lowerCase.toLowerCase() != "no") {
        window.alert("You did not pick a valid option. Try again.")
        return showPrompt("lowercase")
      } else {
        return lowerCase.toLowerCase()
      }
    case "uppercase":
      var upperCase = window.prompt("Do you want uppercase letters? yes or no")
      if (upperCase.toLowerCase() != "yes" && upperCase.toLowerCase() != "no") {
        window.alert("You did not pick a valid option. Try again.")
        return showPrompt("uppercase")
      } else {
        return upperCase.toLowerCase()
      }
    case "numeric":
      var numeric = window.prompt("Do you want numeric values? yes or no")
      if (numeric.toLowerCase() != "yes" && numeric.toLowerCase() != "no") {
        window.alert("You did not pick a valid option. Try again.")
        return showPrompt("numeric")
      } else {
        return numeric.toLowerCase()
      }
    case "special":
      var special = window.prompt("Do you want special characters? yes or no")
      if (special.toLowerCase() != "yes" && special.toLowerCase() != "no") {
        window.alert("You did not pick a valid option. Try again.")
        return showPrompt("special")
      } else {
        return special.toLowerCase()
      }
    case "length":
      var length = window.prompt("How long should the password be? (8-128)")
      if (parseInt(length) < "8" || parseInt(length) > "128") {
        window.alert("Please pick a number between 8 and 128")
        return showPrompt("length")
      } else {
        return length
      }
  }
}

// Generate the password based on criteria
function generatePassword(length, lowerCase, upperCase, numeric, special) {
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
  var password = ""

  for (var i = 0; i < length;) {
    if (lowerCase === "yes" && i < length) {
      password += alphabetLower[Math.floor(Math.random() * alphabetLower.length)]
      i++
    }
    if (upperCase === "yes" && i < length) {
      password += alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
      i++
    }
    if (numeric === "yes" && i < length) {
      password += numbers[Math.floor(Math.random() * numbers.length)]
      i++
    }
    if (special === "yes" && i < length) {
      password += characters[Math.floor(Math.random() * characters.length)]
      i++
    }
  }
  password = shuffle(password)
  return password
}

// Shuffle the password after generation 
function shuffle(password) {
  var shuffledPassword = password.split('')

  for (let i = shuffledPassword.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i)
    let initialValue = shuffledPassword[i]
    shuffledPassword[i] = shuffledPassword[randomIndex]
    shuffledPassword[randomIndex] = initialValue
  }
  return shuffledPassword.join("");
}