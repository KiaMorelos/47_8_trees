/** TreeNode: node for a general tree. */
//based on heavily on solution/demos - this DSA section is a hell of unit to shove into just 3 weeks.

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
    if (!this.root) return 0;
    let sum = this.root.val;

    function findSum(node) {
      node.children.forEach((child) => {
        sum += child.val;
        // if the node has children we need to sum them also
        if (child.children.length > 0) {
          // recurse with the child as the root
          findSum(child);
        }
      });
    }

    findSum(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;
    // if the root is even count is 1 now, otherise it's 0

    function findEvenCount(node) {
      node.children.forEach((child) => {
        // count the child if the value is even
        if (child.val % 2 === 0) count += 1;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          findEvenCount(child);
        }
      });
    }

    findEvenCount(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let countOfGreaters = this.root.val > lowerBound ? 1 : 0;
    // if the root is greater than the bound the count is 1 now, otherise it's 0

    function findNodesGreater(node) {
      // go through all the children for a Node
      node.children.forEach((child) => {
        // count the child if the value is greater than lowerBound
        if (child.val > lowerBound) countOfGreaters++;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          findNodesGreater(child);
        }
      });
    }

    findNodesGreater(this.root);
    return countOfGreaters;
  }
}

module.exports = { Tree, TreeNode };
