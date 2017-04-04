var password = process.argv

function obfuscate(pw) {
  var ob = ""
  for (var i = 0; i < pw.length; i++) {
    if (pw[i] === "a") {
      ob += "4"
    } else if (pw[i] === "e") {
      ob += "3"
    } else if (pw[i] === "o") {
      ob += "0"
    } else if (pw[i] === "l") {
      ob += "1"
    } else {
      ob += pw[i]
    }

  }
  return ob
}



var newpw = obfuscate(password[2])


console.log(newpw)