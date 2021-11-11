const additionFunction = function(number1, number2){
    return number1 + number2;
}
const divisionFunction = function(number1, number2){
    return number1 / number2;
}

const multiplyFunction = function(number1, number2){
    return number1 * number2;
}

const subtractFunction = function(number1, number2){
    return number1 - number2;
}

var num1 = prompt("Enter first number");
var num2 = prompt("Enter the second number");
var calc = prompt("Enter the Operator")

// convert our strings to numbers
var num1Int = parseInt(num1);
var num2Int = parseInt(num2);

if (calc == "*") {
    let result = multiplyFunction(num1Int, num2Int);
    alert(result);
}
else if (calc == "+"){
    let result = additionFunction(num1Int, num2Int);
    alert(result);
}
else if (calc == "-"){
    let result = subtractFunction(num1Int, num2Int);
    alert(result);
}
else{
    let result = divisionFunction(num1Int, num2Int);
    alert(result);
}



// let result = additionFunction(num1Int, num2Int);
// in pure JS we log results via the console log
// use the alert when using html 
// alert(result);
