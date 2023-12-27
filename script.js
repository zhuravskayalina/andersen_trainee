function printResult() {
  const input1 = prompt('Enter number').trim();
  const input2 = prompt('Enter another number').trim();

  if (isInvalidInput(input1) || isInvalidInput(input2)) {
    return console.log('Некорректный ввод!');
  }

  const number1 = Number(input1);
  const number2 = Number(input2);

  if (isNumber(number1) && isNumber(number2)) {
    const result = number1.toString(number2);
    console.log(result);
  }
}

printResult();

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isInvalidInput(value) {
  return !value || isNaN(value);
}
