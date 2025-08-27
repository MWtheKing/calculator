const add = function(a, b) { return a + b; };

const subtract = function(a, b) { return a - b}

const multiply = function(a, b) { return a * b}

const divide = function(a, b) { return a / b}


let currentValue = "";
let previousValue = null;
let currentOperator = null;

const operate = (a, op, b) => {
    
    a = Number(a);
    b = Number(b);

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
    let displayText = ""
    display.innerHTML = displayText

    let buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let val = e.target.innerText

            if (e.target.id === "clear") {
                displayText = "";
                currentValue = "";
                previousValue = null;
                currentOperator = null;

            } else if (e.target.className === "op") {
                if (currentOperator && previousValue !== null && currentValue !== "") {
                    previousValue = operate(previousValue, currentOperator, Number(currentValue));
                    displayText = previousValue.toString();
                } else {
                    previousValue = Number(currentValue);
                }
                currentOperator = val;
                currentValue = ""; 
            } 
            else if (e.target.id === "result") {
                if (currentOperator && previousValue !== null && currentValue !== "") {
                    previousValue = operate(previousValue, currentOperator, Number(currentValue));
                    displayText = previousValue.toString();
                    currentOperator = null;
                    currentValue = ""; 
                }
            } 
            else {
                currentValue += val;
                displayText = currentValue;
            }

            display.innerText = displayText;  
        });
    });
        
}

// note to self, read the bugs i need to fix, when i input two numbers
//  and then add another number or operator, it automatically should operate() 
// and then whatever number or operator should be saved for the next operation
        

console.log(operate("1 + 12"))
display()
