**Getting started:-**

We start off by creating a folder named **Simple jQuery Calculator**. We open this folder in an editor. I am using Atom for it. Having done that, we will create a file named ‘index.html’ which will be storing the Html structure of our web page.

**Creating index.html file:-**

We give our web page the title **“Simple jQuery Calculatorr”**. We include css in our project with the following code:-

`<link rel="stylesheet" href="css/style.css">`

We also include jQuery in our project with the following code:-

`<script src="js/jquery-3.6.0.js"></script>`

and we include custom jQuery code in our project with the following code:-

`<script src="js/jquery-3.6.0.js"></script>`

**Index.html file**

```
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div class="calculator">
      <div class="input" id="input"></div>
      <div class="buttons">
        <div class="operators">
          <div>+</div>
          <div>-</div>
          <div>*</div>
          <div>/</div>
        </div>
        <div class="leftPanel">
          <div class="numbers">
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <div class="numbers">
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div class="numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div class="numbers">
            <div>0</div>
            <div>.</div>
            <div id="clear">C</div>
          </div>
        </div>
        <div class="equal" id="result">=</div>
      </div>
    </div>
    <script src="js/jquery-3.6.0.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
```

**style.css file**

```
body {
  margin: 4% auto;
  width: 500px;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 5px;
  font-size: 1.8rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.calculator {
  padding: 12px;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.8);
  border-radius: 1px;
}

.input {
  border: 1px solid #d6d6d6;
  border-radius: 1px;
  height: 60px;
  padding-right: 15px;
  padding-top: 10px;
  margin-right: 6px;
  text-align: right;
  overflow-x: auto;
  font-size: 2.5rem;
  transition: all .2s ease-in-out;
}

.input:hover {
  border: 1px solid #bbb;
  -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}

.operators div {
  display: inline-block;
  border: 1px solid #bbb;
  border-radius: 1px;
  text-align: center;
  width: 80px;
  padding: 10px;
  margin: 20px 4px 10px 0;
  background-color: #bfbfbf;
  cursor: pointer;
  transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
}

.operators div:hover {
  background-color: #bfbfbf;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-color: #aaa;
}

.operators div:active {
  font-weight: bold;
}

.leftPanel {
  display: inline-block;
}

.numbers div {
  display: inline-block;
  border: 1px solid #bfbfbf;
  width: 80px;
  border-radius: 1px;
  text-align: center;
  margin: 10px 4px 10px 0;
  padding: 10px;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
}

.numbers div:hover {
  background-color: #f1f1f1;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-color: #bbb;
}

.numbers div:active {
  font-weight: bold;
}

div.equal {
  display: inline-block;
  border: 1px solid #9a9797;
  border-radius: 1px;
  width: 17%;
  text-align: center;
  margin: 10px 6px 10px 0;
  padding: 127px 10px;
  vertical-align: top;
  cursor: pointer;
  color: #FFF;
  background-color: #9a9797;
  transition: all .2s ease-in-out;
}

div.equal:hover {
  background-color: #307CF9;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-color: #1857BB;
}

div.equal:active {
  font-weight: bold;
}
```

**custom.js file:-**
```
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


```
