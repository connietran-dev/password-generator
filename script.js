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
generateBtn.addEventListener("click", writePassword);
