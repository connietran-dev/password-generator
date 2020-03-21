// Create an empty object to store the form values.
// TODO: This variable might not be needed.
var formValues = {};


// Variable to count length of password.
var pwCounter = 0;


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

    for (var i = 0; i < pwLength.value; i++) {
      generatePassword();
    }
    
    console.log("Password length is: " + pwLength.value);
    return true;
  }
  else {
    alert("Password length must be between 8 and 128.")
    return false;
  }
}


// Declare variables for what are considered symbols, numbers, lower case characters, and upper case characters.

var pwSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "="];
var pwNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var pwLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];





// Function for selecting a Symbol from the pwSymbol array.

function selectSymbol() {

  // Select a random number between 0 and 9 to determine the index from the symbol array.
  var symbolIndex = Math.floor(Math.random()*10);
  console.log("symbolIndex is: " + symbolIndex);

  // Take symbolIndex number and select the item from the pwSymbols array.
  var selectedSymbol = pwSymbols[symbolIndex];
  console.log("Selected symbol from array: " + selectedSymbol);
  return selectedSymbol;

}

// Function for selecting a Number from the pwNumbers array.

function selectNumber() {

  var numberIndex = Math.floor(Math.random()*10);
  console.log("numberIndex is: " + numberIndex);

  var selectedNumber = pwNumbers[numberIndex];
  console.log("Selected number from array: " + selectedNumber);
  return selectedNumber;

}

// Function for selecting a Lower Case Character from the array.

function selectLowerCase() {

  var lowerCaseIndex = Math.floor((Math.random()*26));
  console.log("lowerCaseIndex is: " + lowerCaseIndex);

  var selectedLowerCase = pwLowerCase[lowerCaseIndex];
  console.log("Selected lower case character from array: " + selectedLowerCase);
  return selectedLowerCase;

}

// Function for selecting a Upper Case Character from the array.

function selectUpperCase() {

  var upperCaseIndex = Math.floor((Math.random()*26));
  console.log("upperCaseIndex is: " + upperCaseIndex);

  var selectedUpperCase = pwUpperCase[upperCaseIndex];
  console.log("Selected upper case character from array: " + selectedUpperCase);
  return selectedUpperCase;

}




// TODO: To create a password - 
// First, generate a password generatePassword()by checking what the user selected in the form.
// TODO: Consider renaming generatePassword() function to checkForm();
// If they chose symbols (inclSymbols = true), then select a symbol from the array - selectSymbol();
// Then, use the selectedSymbol and start adding it to the newPassword.
// add a lower case character, then symbol, then upper case, then number. And use for loop to repeat and until you get the length of the password selected by the user (pwLength.value).





// Function for generating a password
// TODO: However, need to figure out how to generate it for password length desired.


var newPassword = '';

function generatePassword() {

  // If user selected to include Symbols
  // This will add one symbol +1 * loop
  if (inclSymbols.checked === true && pwCounter != pwLength.value) {

    // Then include Symbols in password
    //  - then concatenating (+) it for the password

    newPassword += selectSymbol();

    // Do this as many times as the password length (for loop)

    // And log below message so you know it worked.
    console.log("Symbols included");

    pwCounter++;

    console.log(pwCounter);
  }

  if (inclNumbers.checked === true && pwCounter != pwLength.value) {

    newPassword += selectNumber();

    console.log("Numbers included");

    pwCounter++;

    console.log(pwCounter);


  }

  if (inclLowerCase.checked === true && pwCounter != pwLength.value) {

    newPassword += selectLowerCase();

    console.log("Lower case characters included");

    pwCounter++;

    console.log(pwCounter);

  }

  if (inclUpperCase.checked === true && pwCounter != pwLength.value) {

    newPassword += selectUpperCase();

    console.log("Upper case characters included");

    pwCounter++;

    console.log(pwCounter);

  }

  if (pwCounter === pwLength.value) {
    console.log("Password generated.")
  }



  console.log(newPassword);
  console.log("The password length is: " + newPassword.length);


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

  // Takes 'password' that is generated from generatePassword() and stores it as the value for 'passwordText' which is used above to display what was variable 'password' for the <textarea>

  // TODO: Determine if the order of these statements matter. I would rather switch them so that it's more human-readable with the logic, but it throws errors.
  passwordText.value = newPassword;

}

// Add event listener to generate button
// When the "Generate Password" button (generateBtn) is clicked, the writePassword() function will be called.
// The writePassword() function calls generatePassword()which checks what the user has selected. Then selects from the arrays.
generateBtn.addEventListener("click", () => {

  newPassword = '';
  pwCounter = 0;

  // TODO: Does getformValues() needs to be here?
  getFormValues();

  // TODO: Need to stop form (preventDefault()?) from submitting if conditions not met.
  // Or if statement
  validateLengthInput();

  writePassword();
});