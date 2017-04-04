// a program
// input: two numbers
// output: take the sum of two numbers
// any tricks? how to get the numbers from the command line?

//function takes the {} parntheses and store it in the 'numbers variable'

function sum(numbers) {
  //store total integer 0 as starting point
  var total = 0;
  //add them and show the results
  //create for loop to count array

  // Iterate over numbers
  for (var i = 0; i < numbers.length; i++) {
    // Ensure numbers are numbers
    var number = Number(numbers[i])
    if (isNaN(number)) {
      continue;
    }
    // Sum Them
    total += number;
  }

  // Return total
  return total;
}

//get the two numbers
//Array slice first two items
var numbers = process.argv.slice(2);
var total = sum(numbers)
console.log(total)

//console.log(sum([10,100]) === 110);
//console.log(sum([10,100, "nope"]) === 110);

