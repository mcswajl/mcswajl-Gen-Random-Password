// Assignment Code
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numberChar = "0123456789";
var specChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

var userInput = [];
var password = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
}

// Character length prompt
function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === 
false) { 
  characterLength = parseInt(prompt(`How many characters would you like your password to be? (8 
128)`));
  }

var upper = false
var lower = false
var number = false
var symbol = false

while (!upper && !lower && !number && !symbol) {
  // Upper pop up
  upper = confirm("Click OK to confirm uppercase characters");

  // Lower pop up
  lower = confirm("Click OK to confirm lowercase characters");

  // Num pop up
  number = confirm("Click OK to confirm numeric characters");

  // Spec  pop up
  symbol = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");

}

// Push random lowerCase upperCase Number SpecChar
for (var i = 0; i < characterLength; i++) {
  if (lower) {
    userInput.push(lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
  }
  
  if (upper) {
    userInput.push(upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
  }
  
  if (number) {
    userInput.push(numberChar.charAt(Math.floor(Math.random() * numberChar.length)));
  }
  
  if (symbol) {
    userInput.push(specChar.charAt(Math.floor(Math.random() * specChar.length)));
  }
  var index = (Math.floor(Math.random() * userInput.length));
 
}
// Split the array
password = userInput.splice(characterLength)

console.log(password)

//Join to make a string
return password.join("")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


