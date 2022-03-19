// Assignment Code
var generateBtn = document.querySelector("#generate");

// passwordReqs[0] = character len, must be between 8 & 128 characters
// passwordReqs[1] = boolean for lowercase characters
// passwordReqs[2] = boolean for uppercase characters
// passwordReqs[3] = boolean for numeric characters
// passwordReqs[4] = boolean for special characters
var passwordReqs = [0,0,0,0,0]

var passwordReqs1Complete = false
var passwordReqs2Complete = false
var passwordReqs3Complete = false
var passwordReqs4Complete = false
var passwordReqs5Complete = false

// define the usable characters
const keys = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

function generatePassword() {
  do {
    var prompt1 = prompt("Your password must contain between 8 & 128 characters, inclusive. \nEnter an integer between or equal these numbers for how long you would like your password to be:");
    var entry = prompt1
    
    prompt1 = parseInt(prompt1)
        
    if ((isNaN(prompt1)) || (prompt1 <= 7) || (prompt1 >= 129)) {
      window.alert("Your entry of '" + entry + "' is invalid.\nPlease try again.");
    }
    else {
      window.alert("Your entry of '" + entry + "' is accepted.\nPlease continue to the next prompt.")
      passwordReqs[0] = prompt1
      passwordReqs1Complete = true
    }
  }
  while (passwordReqs1Complete != true);


  do {
    var prompt2 = window.confirm("Would you like to use lowercase characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
    
    if (prompt2 == true) {
      window.confirm("You've selected to use lowercase characters in your password. \nPlease continue to the next prompt.")
      passwordReqs[1] = 1
      passwordReqs2Complete = true
    }
    else {
      window.confirm("You've selected to NOT use lowercase characters in your password. \nPlease continue to the next prompt.")
      passwordReqs2Complete = true
    }

  }
  while (passwordReqs2Complete != true)
  

  do {
    var prompt3 = window.confirm("Would you like to use uppercase characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
    
    if (prompt3 == true) {
      window.confirm("You've selected to use uppercase characters in your password. \nPlease continue to the next prompt.")
      passwordReqs[2] = 1
      passwordReqs3Complete = true
    }
    else {
      window.confirm("You've selected to NOT use uppercase characters in your password. \nPlease continue to the next prompt.")
      passwordReqs3Complete = true
    }
  }
  while (passwordReqs3Complete != true)


  do {
    var prompt4 = window.confirm("Would you like to use numeric characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
    
    if (prompt4 == true) {
      window.confirm("You've selected to use numeric characters in your password. \nPlease continue to the next prompt.")
      passwordReqs[3] = 1
      passwordReqs4Complete = true
    }
    else {
      window.confirm("You've selected to NOT use numeric characters in your password. \nPlease continue to the next prompt.")
      passwordReqs4Complete = true
    }
  }
  while (passwordReqs4Complete != true)


  do {
    var prompt5 = window.confirm("Would you like to use special characters in your password? \nClick 'Ok' for Yes or 'Cancel' for No.")
    
    if (prompt5 == true) {
      window.confirm("You've selected to use special characters in your password. \nPlease continue to the next prompt.")
      passwordReqs[4] = 1
      passwordReqs5Complete = true
    }
    else {
    window.confirm("You've selected to NOT use special characters in your password. \nPlease continue to the next prompt.")
    passwordReqs5Complete = true
    }
  }
  while (passwordReqs5Complete != true)



}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
