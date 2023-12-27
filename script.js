function makeObjectDeepCopy(obj) {
  if (!obj) {
    return;
  }

  if (Array.isArray(obj)) {
    const newArray = [];

    for (let i = 0; i < obj.length; i++) {
      newArray[i] = makeObjectDeepCopy(obj[i]);
    }

    return newArray;
  } else if (isObject(obj)) {
    const newObj = {};

    for (const [key, value] of Object.entries(obj)) {
      newObj[key] = makeObjectDeepCopy(value);
    }

    return newObj;
  } else {
    return obj;
  }
}

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

const iterableObj = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    if (!isNumber(this.from) || !isNumber(this.to)) {
      throw new Error('Object properties are not a numbers');
    }

    if (this.from > this.to) {
      throw new Error('"From" is bigger than "to"');
    }

    let currentEl = this.from;

    return {
      next: () => {
        if (currentEl <= this.to) {
          return { value: currentEl++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

function isObject(obj) {
  return typeof obj === 'object';
}

function isArrayFromNumbers(array) {
  return array.every((item) => typeof item === 'number');
}

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
