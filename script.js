// Assignment Code
var generateBtn = document.querySelector("#generate");

// declaring all of the characters
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numeric = "0123456789".split("");
  var special = "!$^&*-=+_?".split("");

// making the choices for password imput
var optionsArr = []

//console.log (all.split(""))
// Write password to the #password input
function writePassword() {
        var enter = parseInt(prompt("You must choose between 8 and 128"));
        var confirmNumeric = confirm("Will this contain numbers?");
        var confirmSpecial = confirm("Will this contain special characters?");
        var confirmCaps = confirm("Will this contain Uppercase letters?");
        var confirmAlpha = confirm("Will this contain Lowercase letters?");
// making all the possabilitys
    if (confirmNumeric) {
      optionsArr = optionsArr.concat(numeric)
    }
    if (confirmSpecial) {
      optionsArr = optionsArr.concat(special)
    }
    if (confirmCaps){
      optionsArr = optionsArr.concat(caps)
    }
    if (confirmAlpha){
      optionsArr = optionsArr.concat(alpha)
    }

    var randPass = []
    for (var i = 0; i < enter; i++) {
      //so for here enter prompt numbrs
      var randChar = optionsArr[Math.floor(Math.random()*optionsArr.length)];
      randPass.push(randChar);
    }

    //console.log(optionsArr);
    
  var password = randPass //generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
