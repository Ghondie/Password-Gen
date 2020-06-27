// Assignment Code
var generateBtn = document.querySelector("#generate");

// declaring all of the characters
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numeric = "0123456789".split("");
  var special = "!$^&*-=+_?".split("");

// making the choices for password imput
var optionsArr = []
  /*var all = special + numeric + alpha + caps;
  var a = special + numeric + alpha;
  var b = special + numeric + caps;
  var c = special + alpha + caps;
  var d = numeric + alpha + special;
  var e = special + numeric;
  var f = special + caps;
  var g = special + special;
  var h = numeric + alpha;
  var j = numeric + special;
  var k = alpha + special;*/
  
//console.log (all.split(""))
// Write password to the #password input
function writePassword() {
        var enter = parseInt(prompt("You must choose between 8 and 128"));
        var confirmNumeric = confirm("Will this contain numbers?");
        var confirmSpecial = confirm("Will this contain special characters?");
        var confirmCaps = confirm("Will this contain Uppercase letters?");
        var confirmAlpha = confirm("Will this contain Lowercase letters?");
        
    // if all 4 are true print all 4
    // if 3 are true it will print selected 
    // if 2 are true it will print selected 
    // if 1 are true it will print selected 
    // math.random to randomize it

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
    //i already got my array of all options in optionsArr
    //[0,1,2,3,4,5,6,7,8,9,!,$,^,&,*,-,=,+,_,?,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
    // x amount charachters as a password
    var randPass = []
    for (var i = 0; i < enter; i++) {
      //so for here enter prompt numbrs
      var randChar = optionsArr[Math.floor(Math.random()*optionsArr.length)];
      randPass.push(randChar);
    }

    // console.log(optionsArr);
    
  var password = randPass //generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
