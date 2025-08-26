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

const display = function() {

    let display = document.querySelector(".display")
    let displayText = ""
    display.innerHTML = displayText

    let buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "clear") {
                displayText = ""
            } else if (e.target.id === "result") {
                displayText = operate(displayText)
            } else if (e.target.className === "op") {
                displayText += (` ${e.target.innerHTML} `)
            } else {
                displayText += e.target.innerText  
            }
            display.innerHTML = displayText;   
        });
    });
        
}
        

console.log(operate("1 + 12"))
display()
