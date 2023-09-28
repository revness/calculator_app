function createButtons() {
  calculator_div = document.getElementById("buttons");
  buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  for (i = 0; i < buttons.length; i++) {
    button = document.createElement("button");
    button.innerHTML = buttons[i];
    button.setAttribute("onclick", "buttonPressed(this.innerHTML)");
    calculator_div.appendChild(button);
  }
}
function buttonPressed(button) {
  const display_input = document.getElementById("display");
  display_input.value += button;
  if (button == "=") {
    display_input.value[display_input.value.length - 1] = "";
    display_input.value = display_input.value.replace("=", "");
    const expression = display_input.value;
    const firstNumber = parseFloat(expression.split(/[+,\-,*,/]/)[0]);
    const secondNumber = parseFloat(expression.split(/[+,\-,*,/]/)[1]);
    const operator = expression.split(/[0-9,.]/)[1];
    display_input.value = operate(firstNumber, secondNumber, operator);
  }
}
const firstNumber = [];
const secondNumber = [];
const operator = [];

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}

createButtons();
