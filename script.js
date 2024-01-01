function concatStrings(...args) {
  let result = '';

  function concatNextArg(...nextArg) {
    for (const arg of nextArg) {
      if (typeof arg === 'string' || arg === null) {
        result += arg || '';
      }
    }

    return nextArg.length ? concatNextArg : result;
  }

  return concatNextArg(...args);
}

class Calculator {
  constructor(num1, num2) {
    this.setX(num1);
    this.setY(num2);
  }

  setX = (value) => {
    if (!isValidNumber(value)) {
      throw new Error('Incorrect value');
    }

    this.num1 = value;
  };

  setY = (value) => {
    if (!isValidNumber(value)) {
      throw new Error('Incorrect value');
    }

    this.num2 = value;
  };

  logSum = () => {
    console.log(this.num1 + this.num2);
  };

  logMul = () => {
    console.log(this.num1 * this.num2);
  };

  logSub = () => {
    console.log(this.num1 - this.num2);
  };

  logDiv = () => {
    if (this.num2 === 0) {
      throw new Error(`Can't be divided by 0`);
    }

    console.log(this.num1 / this.num2);
  };
}

function isValidNumber(value) {
  return typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity;
}
