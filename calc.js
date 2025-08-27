const add = function(a, b) { return a + b; };

const subtract = function(a, b) { return a - b}

const multiply = function(a, b) { return a * b}

const divide = function(a, b) { return Math.round((a / b) * 100) / 100}


let currentValue = "";
let previousValue = null;
let currentOperator = null;

const operate = (a, op, b) => {
    
    a = Number(a);
    b = Number(b);

    if (op === "÷") {return b === 0 ? 'Error' : divide(a, b);}
    if (op === "×") {return multiply(a, b)}

    switch(op) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return b === 0 ? 'Error' : divide(a, b);
        default: return NaN;
    }
};

const display = function() {

    let display = document.querySelector(".display")
    let displayText = "0"
    display.innerHTML = displayText

    let buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let val = e.target.innerText

            if (e.target.id === "clear") {
                displayText = "0";
                currentValue = "";
                previousValue = null;
                currentOperator = null;

            } else if (e.target.className === "op") {
                if (val === "-" && currentValue === "" && previousValue === null) {
                    currentValue = "-"; 
                    displayText = currentValue;
            } else {
                if (currentOperator && previousValue !== null && currentValue !== "") {
                    previousValue = operate(previousValue, currentOperator, Number(currentValue));
                    displayText = previousValue.toString();
                } else if (previousValue === null && currentValue !== "") {
                    previousValue = Number(currentValue);
                }
                currentOperator = val;
                currentValue = ""; 
            }
            } else if (e.target.id === "result") {
                if (currentOperator && previousValue !== null && currentValue !== "") {
                    previousValue = operate(previousValue, currentOperator, Number(currentValue));
                    displayText = previousValue.toString();
                    currentOperator = null;
                    currentValue = ""; 
                }
            } 
            else {
                if (previousValue !== null && currentOperator === null && currentValue === "") {
                    previousValue = null;
                }
                currentValue += val;
                displayText = currentValue;
            }

            display.innerText = displayText;  
        });
    });
        
}

console.log(operate(-3, "+", 12))
display()
