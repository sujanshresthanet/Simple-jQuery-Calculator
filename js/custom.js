// wanted to try recoding this using jQuery
$(document).ready(function() {
  // ultimately, this calculator should take two values and perform a given operation. Future versions could include better handling of multiple operations / chains of operations, but this shouldn't, as it would require a lot of regex and students don't have that.
// These variables will be where we store information later on.
var num1 = 0;
var operation = "";
var num_2 = 0;
  // append the contents of a number button to the input screen.
  $("div.numbers div").click(function() {
  	var num = $(this).text();
  	$("#input").append(num)
  });
  // show the operator IF the field isn't empty
  $("div.operators div").click(function() {
  	if($("#input").text != "") {
      // store the existing text as number 1, as an integer
      num1 = $("#input").text();
      num1 = parseInt(num1);
      operation = $(this).text();
      $("#input").append(operation)
    }
  });

  // When you click equals, do the math
  $("#result").click(function() {
    //clip off the last bit of the string as number 2 in five steps -- THIS is the worst part of the code and needs refactoring; there are about 5 other ways to do it, and a lot involve appending to variables as we go, but maintaining a placeholder boolean variable that keeps track of whether we're on the first or the second number would probably be best. Just sucks because then backend code and what is displayed are different.
    //reverse the string so that the last numbers are first.
    num_2 = $("#input").text().split("").reverse().join("");
    //parse as an integer so that only the digits after the operator count, since parseint auto clips when it finds a non-number
    num_2 = parseInt(num_2);
    //convert back to a string so we can reverse it again
    num_2 = num_2.toString();
    //reverse this clip
    num_2 = num_2.split("").reverse().join("");
    //convert back to a number, damn this code is dumb.
    num_2 = parseInt(num_2);
    //perform the math
    var answer = "error!";
    if(operation == "+") {
    	answer = num1 + num_2;
    } else if(operation == "-") {
    	answer = num1 - num_2;
    } else if(operation == "*") {
    	answer = num1 * num_2;
    } else if(operation == "/") {
    	answer = num1 / num_2;
    }
    $("#input").empty();
    $("#input").append(answer);
  });

  // Clear the input box when clear is clicked.
  $("#clear").click(function() {
  	$("#input").empty()
  });
});

