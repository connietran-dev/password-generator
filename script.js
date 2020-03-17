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
// TODO: Need to tie this to an actual button. Then add actual error messaging on-screen.
// Here's an example: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

function validateLengthInput() {
  if (pwLength.value >= 8 && pwLength.value <= 128) {
    generatePassword();
  }
  else {
    alert("Password length must be between 8 and 128.")
  }
}

// validateLengthInput();



function generatePassword() {
  if (inclSymbols.value === "yesSymbols") {
    console.log("Yay symbols");
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
  validateLengthInput();
  getFormValues();
  writePassword();
});