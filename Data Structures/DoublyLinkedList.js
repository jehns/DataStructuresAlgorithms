// memory leak somewhere
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

  }

  setTail(node) {
    if (!this.tail) {
      this.tail = node;
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertBefore(node, nodeToInsert) {
    if (this.head.value === node.value) {
      this.setHead(nodeToInsert);
    } else {
      let nextNode = this.head.next;
      let currentNode = this.head;
      while (nextNode) {
        if (nextNode.value === node.value) {
          nodeToInsert.next = nextNode;
          nodeToInsert.prev = currentNode;

          nextNode.prev = nodeToInsert;
          currentNode.next = nodeToInsert;
        }
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
    }
  }

  insertAfter(node, nodeToInsert) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === node.value) {
          if (!currentNode.next) {
            this.setTail(nodeToInsert);
            return;
          } else {
            currentNode.next.prev = nodeToInsert;
            currentNode.next = nodeToInsert;

            nodeToInsert.prev = currentNode;
            nodeToInsert.next = currentNode.next;
            return;
          }
        }
        currentNode = currentNode.next;
      }
  }


  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    if (this.head === this.tail && this.head.value === value) {
      this.head = null;
      this.tail = null;
      return;
    } else if (this.head.value === value) {
      this.head.next.prev = null;
      this.head = this.head.next;
    } else if (this.tail.value === value) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode.prev = null;
        currentNode.next = null;
      }
      currentNode = currentNode.next;
    }
  }

  remove(node) {

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

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Tests
let linked = new DoublyLinkedList();
linked.setHead(new Node(5));
linked.setHead(new Node(4));
linked.setHead(new Node(3));


console.log('set value node', linked.insertAfter(new Node(5), new Node(10)));
console.log('linked list', linked);


