/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...
//1) Create function
function joinList(conceptList) {
  //2) Create empty string
  var list = "";

  //3) Use for loop to go through each item in array of ConceptList
  for (var i = 0; i < conceptList.length; i++) {

    //4) Use if statement to end comma
    if (conceptList.length - 1 == i) {
      list += conceptList[i];
    } else {
      list += conceptList[i] + ", ";
    }
  }
  return list;
}



console.log("Today I learned about " + concepts + ".");

