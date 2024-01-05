class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(el) {
    if (!this.length) {
      this.head = new Node(el);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(el);
    }

    this.length++;
  }

  prepend(el) {
    if (!this.length) {
      this.head = new Node(el);
    } else {
      const newNode = new Node(el);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  find(el) {
    let currentEl = this.head;

    while (currentEl) {
      if (currentEl.value === el) {
        return currentEl.value
      }

      currentEl = currentEl.next;
    }

    return null;
  }

  toArray() {
    const result = [];

    let currentEl = this.head;

    while (currentEl) {
      result.push(currentEl.value);
      currentEl = currentEl.next;
    }

    return result;
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {
      throw new Error('Object is not iterable');
    }

    const linkedList = new LinkedList();

    for (const el of iterable) {
      linkedList.append(el);
    }

    return linkedList;
  }
}
