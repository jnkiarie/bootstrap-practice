const additionFunction = function(number1, number2) {
    return number1 + number2;
  }
  const divisionFunction = function(number1, number2) {
    return number1 / number2;
  }
  
  const multiplyFunction = function(number1, number2) {
    return number1 * number2;
  }
  
  const subtractFunction = function(number1, number2) {
    return number1 - number2;
  }
  
  var num1 = parseInt(prompt("Enter first number"));
  var num2 = parseInt(prompt("Enter the second number"));
  var calc = (prompt("Enter the Operator"));
  
  
  
  if (calc == "*") {
    let result = multiplyFunction(num1, num2);
    alert(result);
  } else if (calc == "+") {
    let result = additionFunction(num1, num2);
    alert(result);
  } else if (calc == "-") {
    let result = subtractFunction(num1, num2);
    alert(result);
  } else if (calc == "/") {
      let result = divisionFunction(num1, num2);
      alert(result);
    }
  
  
  
    // let result = additionFunction(num1Int, num2Int);
    // in pure JS we log results via the console log
    // use the alert when using html 
    // alert(result);
  