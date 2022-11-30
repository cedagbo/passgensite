// (Data already given!) Initialising password options as arrays that the user should consider along the way
// Array of special characters to be included in password
// var specialCharacters = [
//   '@',
//   '%',
//   '+',
//   '\\',
//   '/',
//   "'",
//   '!',
//   '#',
//   '$',
//   '^',
//   '?',
//   ':',
//   ',',
//   ')',
//   '(',
//   '}',
//   '{',
//   ']',
//   '[',
//   '~',
//   '-',
//   '_',
//   '.'
// ];

// // Array of numeric characters to be included in password
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// // Array of lowercase characters to be included in password
// var lowerCasedCharacters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z'
// ];

// // Array of uppercase characters to be included in password
// var upperCasedCharacters = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z'
// ];

// Function to generate password with user input
function generatePassword() {
  
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  var possibleCharacters = [];
  
  // Retrieving the user input and checking it throughout the process
  charactersNumber = prompt("Please, enter your password. Choose between 8 and 64 characters.");
  if (charactersNumber < 8 || charactersNumber > 64) {
    return "Please enter a valid number of characters. Password length should be at least 8 and no more than 64.";
  } else if (isNaN(charactersNumber)) {
    charactersNumber = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + charactersNumber + " characters long.");
    
  }

  // Provide password options and validate the user input
  considerLowercase = confirm("Click OK if you want to include lowercase characters.");
  if (considerLowercase) {
    alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will not have lowercase characters.");
  }

  considerUppercase = confirm("Click OK if you want uppercase characters?");
  if (considerUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will not have uppercase characters.");
  }

  considerNumericCharacters = confirm("Click OK if you consider to include numbers?");
  if (considerNumericCharacters) {
    alert("Your password will have numeric characters.");
  }
  else {
    alert("Your password will not contain numeric characters.");
  }

  considerSpecialCharacters = confirm("Click Ok if you want special characters?");
  if (considerSpecialCharacters) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will not include special characters.");
  }

  if (considerLowercase === false && considerUppercase === false && considerNumericCharacters === false && considerSpecialCharacters === false) {
    return "Please select at least one character type.";
  };

  // Let us initialise possibleCharacters
  
  if (considerLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
  }
  if (considerUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
  }
  if (considerNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
  }
  if (considerSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  }

  // Looping through the final password
  var randomPassword = ""
  for ( var i = 0; i < charactersNumber; i++){
    var j = [Math.floor(Math.random() * possibleCharacters.length)];
    randomPassword = randomPassword + possibleCharacters[j];
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);