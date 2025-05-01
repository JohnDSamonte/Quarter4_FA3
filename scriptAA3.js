function getInput() {
  let num = prompt("Please enter a number");

  if (!isNaN(parseInt(num))) {
    document.getElementById("demo").innerHTML = "Number inputted: " + num;
    EvenOdd(parseInt(num));
  } else {
    alert("Invalid input. Please enter a number.");
    getInput();
  }
}

function EvenOdd(n) {
  if (n % 2 === 0) {
    Even(n);
  } else {
    Odd(n);
  }
}

function Even(n1) {
  var output = "";

  for (var x = n1; x >= 0; x--) {
    for (var y = 1; y <= x; y++) {
      output += x + " ";
    }
    output += "<br>";
  }

  document.getElementById("output").innerHTML = output;
}

function Odd(n1) {
  var output = "";

  for (var x = n1; x >= 1; x--) {
    for (var y = 1; y <= n1; y++) {
      output += x + " ";
    }
    output += "<br>";
  }

  document.getElementById("output").innerHTML = output;
}
  