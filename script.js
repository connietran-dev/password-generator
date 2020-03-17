// Create an empty object to store the form values.
var formValues = {};


// If a checkbox is unchecked when its form is submitted, there is no value submitted to the server to represent its unchecked state (e.g. value=unchecked); the value is not submitted to the server at all.
// However, if it is checked when a form is submitted, the data name/value pair will be submitted - inclSymbols=yesSymbols

function getFormValues () {

formValues.pwLength = document.getElementById("pwLength").value;
formValues.inclSymbols = document.getElementById("inclSymbols").checked;
formValues.inclNumbers = document.getElementById("inclNumbers").checked;
formValues.inclLowerCase = document.getElementById("inclLowerCase").checked;
formValues.inclUpperCase = document.getElementById("inclUpperCase").checked;

console.log(formValues);

};


// This function verifies that the password length is between 8 and 128.
// TODO: Add actual error messaging on-screen.
// Here's an example: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

function validateLengthInput() {
  if (pwLength.value >= 8 && pwLength.value <= 128) {
    return true;
  }
  else {
    alert("Password length must be between 8 and 128.")
    return false;
  }
}


// Declare variables for what is considered symbols, numbers, lower case characters, and upper case characters.

var pwSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var pwNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var pwLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Function for generating a password
// TODO: Use Math.random to select an index out of each array to use in the password.
// TODO: However, need to figure out how to generate it for password length desired.

function generatePassword() {

  // If user selected to include Symbols
  if (inclSymbols.checked === true) {

    // Then include Symbols in password
    console.log(pwSymbols);

    // And log below message so you know it worked.
    console.log("Symbols included");
  }

  // If user selected to include Numbers
  if (inclNumbers.checked === true) {

    // Then include Numbers in password
    console.log(pwNumbers);

    // And log below message so you know it worked.
    console.log("Numbers included");
  }

  // If user selected to include Lower Case Characters
  if (inclLowerCase.checked === true) {

    // Then include Numbers in password
    console.log(pwLowerCase);

    // And log below message so you know it worked.
    console.log("Lower case characters included");
  }

    // If user selected to include Lower Case Characters
    if (inclUpperCase.checked === true) {

      // Then include Numbers in password
      console.log(pwUpperCase);
  
      // And log below message so you know it worked.
      console.log("Upper case characters included");
    }

}




// Assignment Code
// document.querySelector() returns the first Element within the document that matches the specified selector. 
// In this case, "Generate Password" button is returned and stored in generateBtn variable.
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  // generatePassword() function does not yet exist.
  // Once it does exist, it will generate a password and store it in the 'password' variable.
  var password = generatePassword();

  // Returns the <textarea> when "Your Secure Password" and stores it in the variable 'passwordText'.
  var passwordText = document.querySelector("#password");

  // Takes 'password' that is generated from generatePassword() and stores it as the value for 'passwordText'
  passwordText.value = password;

}

// Add event listener to generate button
// When the "Generate Password" button (generateBtn) is clicked, the writePassword() function will be called.
generateBtn.addEventListener("click", () => {

  // TODO: Need to stop form (preventDefault()?) from submitting if conditions not met.
  // Or if statement
  validateLengthInput();

  // TODO: Does getformValues() needs to be here?
  getFormValues();
  writePassword();
});