Array.prototype.myFilter = function(callback) {
  const filtered = [];

  for (let i = 0; i < this.length; i++) {
    const currentEl = this[i];

    if (callback(currentEl, i, this)) {
      filtered.push(currentEl);
    }
  }

  return filtered;
};

function createDebounceFunction(callback, debounceTime) {
  let timerId;

  return function() {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback();
    }, debounceTime);
  };
}
