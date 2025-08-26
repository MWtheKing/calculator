const add = function(a, b) { return a + b; };

const subtract = function(a, b) { return a - b}

const multiply = function(a, b) { return a * b}

const divide = function(a, b) { return a / b}

let firstNum;
let secondNum;
let operator;

const operate = function(equation) {
    
    equation = equation.split(" ")
        firstNum = Number(equation[0])
        operator = equation[1]
        secondNum = Number(equation[2])


    if (operator == "+") { return add(firstNum, secondNum) }
    if (operator == "-") { return subtract(firstNum, secondNum) }
    if (operator == "*") { return multiply(firstNum, secondNum) }
    if (operator == "/") { return divide(firstNum, secondNum) }
}
        

console.log(operate("12 + 12"))
