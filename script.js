Array.prototype.myFilter = function(callback, thisArg) {
  if (this === null || this === undefined) {
    throw new Error(`Can't be called on null or undefined`);
  }

  if (typeof callback !== 'function') {
    throw new Error(`${callback} is not a function`);
  }

  const filtered = [];
  const bindCallback = callback.bind(thisArg);

  for (let i = 0; i < this.length; i++) {
    const currentEl = this[i];

    if (bindCallback(currentEl, i, this)) {
      filtered.push(currentEl);
    }
  }

  return filtered;
};

function createDebounceFunction(callback, debounceTime = 0) {
  let timerId;
  console.log(debounceTime);

  return function() {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback();
    }, debounceTime);
  };
}
