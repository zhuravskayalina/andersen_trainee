class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (!isNumber(maxSize) || !Number.isInteger(maxSize) || maxSize <= 0) {
      throw new Error('Invalid maxSize parameter');
    }

    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(elem) {
    if (this.size >= this.maxSize) {
      throw new Error('Stack overflow');
    }

    const newNode = new Node(elem);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    const poppedEl = this.top.value;
    this.top = this.top.next;
    this.size--;

    return poppedEl;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const result = [];
    let currentEl = this.top;

    while (currentEl) {
      result.push(currentEl.value);
      currentEl = currentEl.next;
    }

    return result.reverse();
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {
      throw new Error('Object is not iterable');
    }

    const stack = new Stack();

    for (const el of iterable) {
      stack.push(el);
    }

    return stack;
  }
}

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

module.exports = { Stack };
