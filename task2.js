function selectFromInterval(array, start, end) {
  let startValue = start;
  let endValue = end;
  const result = [];

  if (!Array.isArray(array) || !isArrayFromNumbers(array)) {
    throw new Error('Invalid array');
  }

  if (!isNumber(start) || !isNumber(end)) {
    throw new Error('Invalid argument');
  }

  if (start > end) {
    startValue = end;
    endValue = start;
  }

  for (let i = 0; i < array.length; i++) {
    const currentEl = array[i];

    if (currentEl > startValue && currentEl <= endValue) {
      result.push(currentEl);
    }
  }

  return result;
}

function isArrayFromNumbers(array) {
  return array.every((item) => typeof item === 'number');
}

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
