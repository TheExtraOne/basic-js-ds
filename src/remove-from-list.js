const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let resultArr = [];
  for (let i = 0; i < l.length; i++) {
    if (!(l[i] === k)) {
      resultArr.push(l[i]);
    }
  }
  return resultArr.reverse().reduce((acc, current) => {
    if (acc) {
      let node = new ListNode(current);
      node.next = acc;
      return node;
    }

    return new ListNode(current);
  }, 0)
}

module.exports = {
  removeKFromList
};
