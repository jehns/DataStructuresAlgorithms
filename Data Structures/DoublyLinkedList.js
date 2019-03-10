class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
  }

  setTail(node) {
    // Write your code here.
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
		if (!this.head) return false;
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) return true;
			currentNode = currentNode.next;
		}
		return false;
  }
}
