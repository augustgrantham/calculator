//variables

let num1 = "";
let num2 = "";
let op = " ";
let state = "input1";
let decimal = false;
let operating = false;
let ans = false;
//display reference
const display = document.querySelector(".display");
//button references

const buttons = document.querySelectorAll("button");

function calculatorController(input) {
    switch(input) {
        case 'plusKey':
            op = '+';
            console.log(op);
            state = "input2";
            operating = true;
            break;
        case 'minusKey':
            op = '-';
            console.log(op);
            state = "input2";
            operating = true;
            break;
        case 'multiplyKey':
            op = '*';
            console.log(op);
            state = "input2";
            operating = true;
            break;
        case 'divideKey':
            op = '/';
            console.log(op);
            state = "input2";
            operating = true;
        case "equalKey":
            let result = operate(op,num1,num2);
            updateDisplay(result);
            console.log(result);
            num1 = result;
            state = "num1";
            ans = true;
        default:
            break;
    }
    if(!operating) {
    switch(state) {
        case "input1":
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
    operating = false;
    
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
        case '+':
            return add(Number(num1),Number(num2));
            break;
        case '-':
            return subtract(Number(num1),Number(num2));
            break;
        case '/':
            return divide(Number(num1),Number(num2));
            break;
        case '*':
            return multiply(Number(num1),Number(num2));
            break;
    }
}
function clear() {
    display.textContent = "";
}