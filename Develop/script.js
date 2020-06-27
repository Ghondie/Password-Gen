// Assignment Code
var generateBtn = document.querySelector("#generate");

// declaring all of the characters
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numeric = "0123456789".split("");
  var special = "!$^&*-=+_?".split("");

// making the choices for password imput

  var all = special + numeric + alpha + Caps;
  var a = special + numeric + alpha;
  var b = special + numeric + caps;
  var c = special + alpha + caps;
  var d = numeric + alpha + special;
  var e = special + numeric;
  var f = special + caps;
  var g = special + special;
  var h = numeric + alpha;
  var j = numeric + special;
  var k = alpha + special;

// Write password to the #password input
function writePassword() {
   if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmNumeric = confirm("Will this contain numbers?");
        confirmSpecial = confirm("Will this contain special characters?");
        confirmCaps = confirm("Will this contain Uppercase letters?");
        confirmAlpha = confirm("Will this contain Lowercase letters?");
    };
    else if (confirmSpecial && confirmNumeric && confirmCaps && confirmAlpha) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
