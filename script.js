//variables

let num1 = "";
let num2 = "";
let op = " ";
let state = "input1";
let decimal = false;
let operating = false;
//display reference
const display = document.querySelector(".display");
//button references

const buttons = document.querySelectorAll("button");

function calculatorController(input) {
    switch(input) {
        //if it's an operator
        case 'clearKey':
            num1 = '';
            num2 = '';
            op = '';
            state = "input1";
            updateDisplay(num1);
            break;
        case 'plusKey':
        case 'minusKey':
        case 'multiplyKey':
        case 'divideKey':
            console.log(input);
            if(num2 == null) {
                console.log("num2 was null");
                op = input;
                state = "input2";
                num2 = "";
                
            }
            else if(num1 != '' && num2 != '') {
                console.log("neither inputs were null")
                let result = operate(op,num1,num2);
                num1 = result;
                num2 = '';
                op = input;
                state = "input2";
                updateDisplay(num1);
            }
            else {
                num2 = "";
                state = "input2";
                op = input;
            }
        
        break;
        case "equalKey":
        let result = operate(op,num1,num2)
        updateDisplay(result);
        num1 = result;
        num2 = null;
        state = 'input1';
        break;
        default:
        switch(state) {
        case "input1":
            if(num2 == null) {
                num1 = input;
                num2 = "";
                updateDisplay(num1);
            }
            else {
                if(input == '.'){
                if(decimal) {
                    return;
                }
                else {
                    num1 += input;
                    updateDisplay(num1); 
                    decimal = true;
                }
            }
            else {
                num1 += input;
                updateDisplay(num1); 
            }
        }
            break;
        case "input2":
            if(input == '.'){
                if(decimal) {
                    return;
                }
                else {
                    num2 += input;
                    updateDisplay(num2); 
                    decimal = true;
                }
            }
            else {
                num2 += input;
                updateDisplay(num2); 
            }
            break;

     }
    }
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    calculatorController(button.id);
  });
});
//display
function updateDisplay(string) {
    console.log(string);
    display.textContent = string;
}
//opearation functions
//add function
function add(num1,num2) {
    return num1 + num2;
}
//subtract function
function subtract(num1,num2) {
    return num1 - num2
}
//divide function
function divide(num1,num2) {
    return num1/num2;
}
//multiply
function multiply(num1,num2) {
    return num1*num2;
}
//operation function
function operate(op, num1, num2) {
    switch(op) {
        case 'plusKey':
            return add(Number(num1),Number(num2));
            break;
        case 'minusKey':
            return subtract(Number(num1),Number(num2));
            break;
        case 'divideKey':
            return divide(Number(num1),Number(num2));
            break;
        case 'multiplyKey':
            return multiply(Number(num1),Number(num2));
            break;
    }
}
function clear() {
    display.textContent = "";
}