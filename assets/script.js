// Set password length to numerical length chosen by user. Must be at least 8 characters and no more than 128 characters.
function passwordLength() {
  promptLength = window.prompt("How many characters long would you like your password to be? Enter a number between 8 and 128.");
  if (promptLength > 7 && promptLength < 129) {
    validPassword = promptLength;
    console.log(validPassword + " is the valid length selected.");
  }
  else if (promptLength <= 7 || promptLength >= 129) {
    window.alert("Please enter a number between 8 and 128. Try again!");
    promptLength = window.prompt("How many characters long would you like your password to be? Enter a number between 8 and 128.");
    if (promptLength > 7 && promptLength < 129) {
      validPassword = promptLength;
      console.log(validPassword + " is the valid length selected.");
    }
    else {
      window.alert("You'll need to enter a valid number of characters. Please refresh this page and try again.");
      console.log(promptLength + " is the invalid length selected.");
    }
  }
}

// function generatePassword() {
//   passwordLength();
//   if (validPassword) {
//     //let user set password character preferences
//     var specialCharactersConfirm = window.confirm("Click OK to confirm including special characters in your password.");
//     var numericCharactersConfirm = window.confirm("Click OK to confirm including numbers in your password.");
//     var lowercaseCharactersConfirm = window.confirm("Click OK to confirm including lowercase letters in your password.");
//     var uppercaseCharactersConfirm = window.confirm("Click OK to confirm including uppercase letters in your password.");
//     // possible password values based on user input
//     if (specialCharactersConfirm && numericCharactersConfirm && lowercaseCharactersConfirm && uppercaseCharactersConfirm) {
//       specialValues = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     } else {
//       specialValues = "";
//     }
//     if (numericCharactersConfirm) {
//       numericValues = "1234567890";
//     } else {
//       numericValues = "";
//     }
//     if (lowercaseCharactersConfirm) {
//       lowercaseValues = "abcdefghijklmnopqrstuvwxyz";
//     } else {
//       lowercaseValues = "";
//     }
//     if (uppercaseCharactersConfirm) {
//       uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     } else {
//       uppercaseValues = "";
//     }
//     var fullCustomValues = specialValues + numericValues + lowercaseValues + uppercaseValues;
//     console.log("The possible character set for this password is " + fullCustomValues);
//   }
//   var password = "";

//   // for loop to generate one number, letter, or special symbol for each character in the length of the user's password length
//   for (var i = 0; i < validPassword; i++) {
//     var password = password + fullCustomValues.charAt(Math.floor(Math.random() * Math.floor(fullCustomValues.length - 1)));
//   }
//   console.log(password);
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  function generatePassword() {
    passwordLength();
    if (validPassword) {
      //let user set password character preferences
      var specialCharactersConfirm = window.confirm("Click OK to confirm including special characters in your password.");
      var numericCharactersConfirm = window.confirm("Click OK to confirm including numbers in your password.");
      var lowercaseCharactersConfirm = window.confirm("Click OK to confirm including lowercase letters in your password.");
      var uppercaseCharactersConfirm = window.confirm("Click OK to confirm including uppercase letters in your password.");
      // possible password values based on user input
      if (specialCharactersConfirm && numericCharactersConfirm && lowercaseCharactersConfirm && uppercaseCharactersConfirm) {
        specialValues = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      } else {
        specialValues = "";
      }
      if (numericCharactersConfirm) {
        numericValues = "1234567890";
      } else {
        numericValues = "";
      }
      if (lowercaseCharactersConfirm) {
        lowercaseValues = "abcdefghijklmnopqrstuvwxyz";
      } else {
        lowercaseValues = "";
      }
      if (uppercaseCharactersConfirm) {
        uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else {
        uppercaseValues = "";
      }
      var fullCustomValues = specialValues + numericValues + lowercaseValues + uppercaseValues;
      console.log("The possible character set for this password is " + fullCustomValues);
    }
    var password = "";

    // for loop to generate one number, letter, or special symbol for each character in the length of the user's password length
    for (var i = 0; i < validPassword; i++) {
      var password = password + fullCustomValues.charAt(Math.floor(Math.random() * Math.floor(fullCustomValues.length - 1)));
    }
    console.log("The generatepassword password is " + password);
  }
  generatePassword();
  console.log("The password is " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("The writepassword passwordText is " + passwordText);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

//Call the function

// writePassword();
