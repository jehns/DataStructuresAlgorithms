class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.]
		if (value > this.value) {
			if (this.right) {
				this.right.insert(value)
			} else {
				this.right = new BST(value)
			}
		}
		if (value < this.value) {
			if (this.left) {
				this.left.insert(value)
			} else {
				this.left = new BST(value)
			}
		}
    return this;
  }

  contains(value) {
    // Write your code here.
		if (this.value === value) {return true}
		if (this.left) {
      const leftSearch = this.left.contains(value);
      if (leftSearch) {return true}
    }
		if (this.right) {
      const rightSearch = this.right.contains(value);
      if (rightSearch) {return true}
    }
    return false
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

const tree = new BST(50);

tree.insert(48)
tree.insert(47)
tree.insert(52)

console.log(tree)

console.log(tree.contains(53))
