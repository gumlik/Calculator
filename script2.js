let currentInputTextElement = document.querySelector("[data-current-input]");
let previousInputTextElement = document.querySelector("[data-previous-input]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

let operator = "";
let firstNumber;
let secondNumber;

allClearButton.addEventListener("click", clear);
equalsButton.addEventListener("click", handleEqualsButton);

function clear() {
  previousInputTextElement.innerText = "";
  currentInputTextElement.innerText = "";
}
clear();

numberButtons.forEach((button) =>
  button.addEventListener("click", handleDigitInput)
);

function handleDigitInput(e) {
  currentInputTextElement.innerText += e.target.innerText;
}

operatorButtons.forEach((button) =>
  button.addEventListener("click", handleOperatorInput)
);

function handleOperatorInput(e) {
  operator = e.target.textContent;
  firstNumber = Number(currentInputTextElement.innerText);
  currentInputTextElement.innerText += e.target.textContent;
  previousInputTextElement.innerText = firstNumber;
  previousInputTextElement.innerText = currentInputTextElement.innerText;
  currentInputTextElement.innerText = "";
}

function handleEqualsButton() {
  secondNumber = currentInputTextElement.innerText;
  let result;
  switch (operator) {
    case "+":
      result = parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }
  previousInputTextElement.innerText = "";
  currentInputTextElement.innerText = result;
}
