let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    display.value = display.value === '0' ? number : display.value + number;
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(display.value);
    currentOperation = operation;
    display.value = '';
}

function calculate() {
    if (currentOperation === null || display.value === '') return;
    secondOperand = parseFloat(display.value);
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    display.value = result;
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
}
