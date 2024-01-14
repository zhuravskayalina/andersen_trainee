const prevOperandViewElement = document.querySelector('.previous-operand');
const currentOperandViewElement = document.querySelector('.current-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const resultButton = document.querySelector('.result');
const toggleSignButton = document.querySelector('.toggle-sign');

class Calculator {
  constructor(prevOperandViewElement, currentOperandViewElement) {
    this.prevOperandViewElement = prevOperandViewElement;
    this.currentOperandViewElement = currentOperandViewElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = null;
    this.result = null;
  }

  addNumber(number) {
    console.log(this.currentOperand);
    if (number === '.' && this.currentOperand.includes('.')) {
      return;
    }

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  formatNumber(number) {
    const stringNumber = number.toString();
    const numBeforeDot = parseFloat(stringNumber.split('.')[0]);
    const numAfterDot = stringNumber.split('.')[1];

    let numberToDisplay;

    if (isNaN(numBeforeDot)) {
      numberToDisplay = '';
    } else {
      numberToDisplay = numBeforeDot.toLocaleString('en', {maximumFractionDigits: 0});
    }

    if (numAfterDot != null) {
      return `${numberToDisplay}.${numAfterDot}`;
    } else {
      return numberToDisplay;
    }
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') {
      return;
    }

    if (this.previousOperand !== '') {
      this.calculate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  roundNumber(number) {
    const parts = number.toString().split('.');
    if (parts[1] && parts[1].length > 8) {
      return number.toFixed(8);
    }
    return number;
  }

  toggleSign() {
    if (this.currentOperand === '0') {
      return;
    }

    this.currentOperand = -this.currentOperand;
  }

  calculate() {
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) {
      return;
    }

    switch (this.operation) {
      case '+':
        this.result = prev + current;
        break;
      case '-':
        this.result = prev - current;
        break;
      case '*':
        this.result = prev * current;
        break;
      case '÷':
        this.result = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = this.roundNumber(this.result);
    this.operation = null;
    this.previousOperand = '';
  }

  updateDisplay() {
    if (this.result && !isValidNumber(this.result)) {
      this.currentOperandViewElement.innerText = 'Error';
      this.prevOperandViewElement.innerText = '';
      this.clear();
      return;
    }

    this.currentOperandViewElement.innerText = this.formatNumber(this.currentOperand);
    if (this.operation) {
      this.prevOperandViewElement.innerText = `${this.formatNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.prevOperandViewElement.innerText = '';
    }
  }
}

const calculator = new Calculator(prevOperandViewElement, currentOperandViewElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.addNumber(button.dataset.value);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.dataset.value);
    calculator.updateDisplay();
  });
});

resultButton.addEventListener('click', (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

toggleSignButton.addEventListener('click', (button) => {
  calculator.toggleSign();
  calculator.updateDisplay();
});

function isValidNumber(number) {
  return typeof number === 'number' && number !== Infinity && number !== -Infinity && !isNaN(number);
}
