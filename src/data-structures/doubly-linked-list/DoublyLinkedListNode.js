export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous; // 多了个 previous 属性
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
