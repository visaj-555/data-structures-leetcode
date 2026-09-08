// 141. Linked List Cycle

//  Approach 1 : Hash Table

var hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr !== null) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};

// Approach 2  : Floyd’s Cycle Detection

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
