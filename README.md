# JavaScript: Password Generator

This Javascript browser application generates a random password based on user-selected criteria.

The webpage will prompt you for your desired password length and then ask for your password criteria - whether to include symbols, numbers, lowercase characters, and/or uppercase characters.

If time permits, a future improvement would be a refactor of the code. I'd like to add the user's desired characters (symbols, numbers, etc.) to a larger array and use Math.random to select from the larger array to generate the password.

However, this was ultimately an exercise in utilizing vanilla Javascript and fundamental Javascript concepts.

The live page can be found here: https://connietran-dev.github.io/password-generator/ 

---


## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```