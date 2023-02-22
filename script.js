let currentInputTextElement = document.querySelector("[data-current-input]");
let previousInputTextElement = document.querySelector("[data-previous-input]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
let operator = "";
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

allClearButton.addEventListener("click", clear);

function clear() {
  previousInputTextElement.innerText = "";
  currentInputTextElement.innerText = "";
}
clear();

function subtract(previousInputTextElement, currentInputTextElement) {
  return previousInputTextElement - currentInputTextElement;
}

function add(previousInputTextElement, currentInputTextElement) {
  return previousInputTextElement + currentInputTextElement;
}

function divide(previousInputTextElement, currentInputTextElement) {
  return currentInputTextElement / previousInputTextElement;
}

function multiply(previousInputTextElement, currentInputTextElement) {
  return previousInputTextElement * currentInputTextElement;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInputTextElement.innerText += button.innerText;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.innerText.trim();
    console.log(operator);
    currentInputTextElement.innerText += button.innerText;
    // previousInputTextElement.innerText = currentInputTextElement.innerText;
    // currentInputTextElement.innerText = "";
  });
});

equalsButton.addEventListener("click", operate);

function operate() {
  const prev = parseFloat(previousInputTextElement.innerText);
  const curr = parseFloat(currentInputTextElement.innerText);
  let result;

  switch (operator) {
    case "+":
      result = add(prev, curr);
      break;
    case "-":
      result = subtract(prev, curr);
      break;
    case "*":
      result = multiply(prev, curr);
      break;
    case "/":
      result = divide(prev, curr);
      if (prev === 0 || curr === 0) {
        result = "stop that";
      }
      break;
    default:
      result = "Invalid operator";
  }

  previousInputTextElement.innerText = result;
  // previousInputTextElement.innerText = currentInputTextElement.innerText;
  currentInputTextElement.innerText = "";

  console.log(curr, prev, result);
}

operate();

// const data = "1-1";
// let result;
// let operator = "-";

// switch (operator) {
//   case "+":
//     [numberOne, numberTwo] = data.split("+");
//     result = Number(numberOne) + Number(numberTwo);
//     console.log(result);
//     break;
//   case "-":
//     [numberOne, numberTwo] = data.split("-");
//     result = Number(numberOne) - Number(numberTwo);
//     console.log(result);
//     break;
// }
