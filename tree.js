/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    function sumFinder(node) {
      if (node === null) return 0;
      let sum = node.val;
      for (let child of node.children) {
        sum += sumFinder(child);
      }
      return sum;
    }
    return sumFinder(this.root);
  }



  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    function evenFinder(node) {
      if (node === null) return 0;
      let evenCount = 0;
      if (node.val % 2 === 0) {
        evenCount += 1;
      }
      for (let child of node.children) {
        evencount += evenFinder(child);
      }
      return evenCount;
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    function lowerCheck(node) {
      if (node === null) return 0;
      let lowerCount = 0;
      if (node.val > lowerBound) {
        lowerCount += 1;
      }
      for (let child of node.children) {
        lowercount += lowerCheck(child);
      }
      return lowerCount;
    }
    return lowerCheck(this.root);
  }
}

module.exports = { Tree, TreeNode };
