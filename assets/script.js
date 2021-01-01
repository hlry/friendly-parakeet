// Assignment code here

function passwordLength() {
  promptLength = window.prompt("How long would you like your password to be? Enter between 8 and 128 to choose the number of characters.");
  console.log("promptLength is " + promptLength);
  if (promptLength > 7 && promptLength < 129) {
    passwordLength = promptLength;
    console.log(passwordLength);
  }
  else if (promptLength <= 7 || promptLength >= 129) {
    window.alert("Please enter a number between 8 and 128. Try again!");
    promptLength = window.prompt("How long would you like your password to be? Enter between 8 and 128 to choose the number of characters.");
    if (promptLength > 7 && promptLength < 129) {
      passwordLength = promptLength;
      console.log(passwordLength);
    }
    else {
      window.alert("You'll need to enter a valid number of characters. Please refresh this page and try again.");
    }
  }
}

function generatePassword() {
  // loop array
  console.log("A character has been added to your password")
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Calling all the functions

passwordLength();

writePassword();
