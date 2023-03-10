var show = document.getElementById("output");
var All_buttons = document.getElementsByClassName("btn2");
// forEach() executes a provided function once for each array

Array.prototype.forEach.call(All_buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && button.textContent != "AC" && button.textContent != "x" && button.textContent != "÷" && button.textContent != "√" && button.textContent != "sq" && button.textContent != "%" && button.textContent != "DEL" && button.textContent != "+/-" && button.textContent != "sin" && button.textContent != "cos" && button.textContent != "tan" && button.textContent != "log" && button.textContent != "ln" && button.textContent != "^" && button.textContent != "n!" && button.textContent != "π" && button.textContent != "exp" && button.textContent != "radians" && button.textContent != "degrees") {
      show.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "AC") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "DEL") {
      deletes();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "sq") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "^") {
      exponent();
    } else if (button.textContent === "n!") {
      factorial();
    } else if (button.textContent === "exp") {
      exp();
    } else if (button.textContent === "radians") {
      radians();
    } else if (button.textContent === "degrees") {
      degrees();
    }
  });
});



// ***button functions***
function checkLength() {
  if (show.value.length >= 15) {
    show.value = "Overload";
  }
}
function syntaxError() {
  if (eval(show.value) == SyntaxError) {
    show.value = "Syntax Error";
  }
}
function equals() {
  if ((show.value).indexOf("^") > -1) {
    var base = (show.value).slice(0, (show.value).indexOf("^"));
    var exponent = (show.value).slice((show.value).indexOf("^") + 1);
    show.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    show.value = eval(show.value);
    checkLength();
    syntaxError();
  }
}
function clear() {
  show.value="";
}
function deletes() {
  show.value = show.value.substring(0, show.value.length - 1);
}
function multiply() {
  show.value = show.value + "*";
}
function divide() {
  show.value = show.value + "/";
}


function factorial() {
  var result = 1;
  if (show.value === 0) {
    show.value = "1";
  } else if (show.value < 0) {
    show.value = "undefined";
  } else {
    var result = 1;
    for (var i = show.value; i > 0; i--) {
      result = result * i;
    }
    show.value = result;
  }
}
function pi() {
  if(show.value === "") {
    show.value = Math.PI;
  }
  show.value = (show.value * Math.PI);
}
function square() {
  show.value = eval(show.value * show.value);
}
function squareRoot() {
  show.value = Math.sqrt(show.value);
}
function percent() {
  show.value = show.value / 100;
}
function sin() {
  show.value = Math.sin(show.value);
}
function cos() {
  show.value = Math.cos(show.value);
}
function tan() {
  show.value = Math.tan(show.value);
}
function log() {
  show.value = Math.log10(show.value);
}
function ln() {
  show.value = Math.log(show.value);
}
function exponent() {
  show.value = show.value + "^";
}
function exp() {
  show.value = Math.exp(show.value);
}
function radians() {
  show.value = show.value * (Math.PI / 180);
}
function degrees() {
  show.value = show.value * (180 / Math.PI);
}