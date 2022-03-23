// Assignment Code
var generateBtn = document.querySelector("#generate");

// passwordReqs[0] = character len, must be between 8 & 128 characters
// passwordReqs[1] = boolean for lowercase characters
// passwordReqs[2] = boolean for uppercase characters
// passwordReqs[3] = boolean for numeric characters
// passwordReqs[4] = boolean for special characters
var passwordReqs = [0,0,0,0,0]

// define various stages of prompt completion
var passwordReqs1Complete = false
var passwordReqs2Complete = false
var passwordReqs3Complete = false
var passwordReqs4Complete = false
var passwordReqs5Complete = false
var atLeastOneTrue = false

// define the usable characters
var keys = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}

// predefined list of usable characters, no value initially
var usableCharacters = ""


// function to generate a password
function generatePassword() {
  // ask number of characters prompt
  do {
    var prompt1 = prompt("Your password must contain between 8 & 128 characters, inclusive. \nEnter an integer between or equal these numbers for how long you would like your password to be:");
    var entry = prompt1
    
    prompt1 = parseInt(prompt1)
    // check requirements of not null value, less than 8, or more than 128. generate response and set requirement flag as completed
    if ((isNaN(prompt1)) || (prompt1 < 8) || (prompt1 > 128)) {
      window.alert("Your entry of '" + entry + "' is invalid.\nPlease try again.");
    }
    else {
      window.alert("Your entry of '" + entry + "' is accepted.\nPlease continue to the next prompt.")
      // notes number of characters in the requirements array
      passwordReqs[0] = prompt1
      passwordReqs1Complete = true
    }
  }
  // code will rerun the prompt loop until the requirement is met
  while (passwordReqs1Complete != true);
  
  // Loop to ensure at least one character requirement is met to generate a password
  do{  
    // ask lowercase characters prompt, yes or no answer
    do {
      var prompt2 = window.confirm("Would you like to use lowercase characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
      if (prompt2 == true) {
        window.confirm("You've selected TO USE lowercase characters in your password. \nPlease continue to the next prompt.")
        // notes to use lowercase by setting requirements array's boolean to true
        passwordReqs[1] = 1
        passwordReqs2Complete = true
      }
      else {
        window.confirm("You've selected TO NOT USE lowercase characters in your password. \nPlease continue to the next prompt.")
        passwordReqs2Complete = true
      }
  
    }
    while (passwordReqs2Complete != true)
    
    // ask uppercase characters prompt, yes or no answer
    do {
      var prompt3 = window.confirm("Would you like to use uppercase characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
      
      if (prompt3 == true) {
        window.confirm("You've selected TO USE uppercase characters in your password. \nPlease continue to the next prompt.")
        // notes to use uppercase by setting requirements array's boolean to true
        passwordReqs[2] = 1
        passwordReqs3Complete = true
      }
      else {
        window.confirm("You've selected TO NOT USE uppercase characters in your password. \nPlease continue to the next prompt.")
        passwordReqs3Complete = true
      }
    }
    while (passwordReqs3Complete != true)
  
    // ask numeric characters prompt, yes or no answer
    do {
      var prompt4 = window.confirm("Would you like to use numeric characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
      
      if (prompt4 == true) {
        window.confirm("You've selected TO USE numeric characters in your password. \nPlease continue to the next prompt.")
        // notes to use numbers by setting requirements array's boolean to true
        passwordReqs[3] = 1
        passwordReqs4Complete = true
      }
      else {
        window.confirm("You've selected TO NOT USE numeric characters in your password. \nPlease continue to the next prompt.")
        passwordReqs4Complete = true
      }
    }
    while (passwordReqs4Complete != true)
  
    // ask symbolic characters prompt, yes or no answer
    do {
      var prompt5 = window.confirm("Would you like to use special characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
      
      if (prompt5 == true) {
        window.confirm("You've selected TO USE special characters in your password. \nPlease continue to the next prompt.")
        // notes to use symbols by setting requirements array's boolean to true
        passwordReqs[4] = 1
        passwordReqs5Complete = true
      }
      else {
      window.confirm("You've selected TO NOT USE special characters in your password. \nPlease continue to the next prompt.")
      passwordReqs5Complete = true
      }
    }
    while (passwordReqs5Complete != true)
  
    // generates an undefined password array of length from the character limit prompt
    var password = Array.from({length: passwordReqs[0]})
  
    // if statements to evaluate if at least one character requirement was met to generate a password
    // also adds acceptable character keys to aggregate into one large string
    if (passwordReqs[1] == true) {
      usableCharacters = usableCharacters.concat(keys['lowerCase'])
      atLeastOneTrue = true
    }
    if (passwordReqs[2] == true) {
      usableCharacters = usableCharacters.concat(keys['upperCase'])
      atLeastOneTrue = true
    }
    if (passwordReqs[3] == true) {
      usableCharacters = usableCharacters.concat(keys['number'])
      atLeastOneTrue = true
    }
    if (passwordReqs[4] == true) {
      usableCharacters = usableCharacters.concat(keys['symbol'])
      atLeastOneTrue = true
    }
    // if no character requirement was met, rerun the look reasking the prompts
    if (atLeastOneTrue == false) {
    window.alert("You did not select to use lowercase, uppercase, numeric, or symbolic characters for password generation. \nAt least one of these must be selected. \nPlease try again.")
    }
  }
  // flag to rerun the prompt 
  while (atLeastOneTrue == false)
  
  
  // split the available charactrers string into an array
  usableCharacters = usableCharacters.split("")

  // Fisher-Yates shuffle algorithm for an array, taken from google search "javascript shuffle array"
  for(let i = usableCharacters.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = usableCharacters[i]
    usableCharacters[i] = usableCharacters[j]
    usableCharacters[j] = temp
  }

  // loop to choose random characters in the now shuffled array
  for (index=0; index < password.length; index++) {
    password[index] = usableCharacters[Math.floor(Math.random() * usableCharacters.length)]
  }

  // changes the array into a string
  password = password.join('')

  // returns the random password string
  return password

}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
