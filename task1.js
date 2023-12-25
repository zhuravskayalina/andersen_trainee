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

function isObject(obj) {
  return typeof obj === 'object';
}
