//display reference
const display = document.querySelector(".display");
//button references
const clearButton = document.querySelector(".clearKey");
const divideButton = document.querySelector(".divideKey");
const multiplyButton = document.querySelector(".multiplyKey");
const minusButton = document.querySelector(".minusKey");
const oneButton = document.querySelector(".oneKey");
const twoButton = document.querySelector(".twoKey");
const threeButton = document.querySelector(".threeKey");
const fourButton = document.querySelector(".fourKey");
const fiveButton = document.querySelector(".fiveKey");
const sixButton = document.querySelector(".sixKey");
const sevenButton = document.querySelector(".sevenKey");
const eightButton = document.querySelector(".eightKey");
const nineButton = document.querySelector(".nineKey");

//operations
clearButton.addEventListener("click",clear);
//input
oneButton.addEventListener("click",(event) => {
    input("1");
});

function input(string) {
    console.log(string);
    display.textContent += string;
}

function clear() {
    display.textContent = "";
}