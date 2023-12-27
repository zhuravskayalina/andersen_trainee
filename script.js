function printResult() {
  const input1 = prompt('Enter number').trim();

  if (isInvalidInput(input1)) {
    console.log('Некорректный ввод!');
    return;
  }

  const input2 = prompt('Enter another number').trim();

  if (isInvalidInput(input2)) {
    console.log('Некорректный ввод!');
    return;
  }

  const number1 = Number(input1);
  const number2 = Number(input2);

  if (isNumber(number1) && isNumber(number2)) {
    const sum = number1 + number2;
    const division = number1 / number2;

    console.log(`Ответ: ${sum}, ${division}`);
  }
}

printResult();

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isInvalidInput(value) {
  return !value || isNaN(value);
}
