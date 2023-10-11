// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      const newNode = new TreeNode(val);
      if (this.root === null) {
        this.root = newNode;
      } else {
        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
          } else {
            this.insert(val, currentNode.left);
          }
        } else if (val > currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
          } else {
            this.insert(val, currentNode.right);
        }
      }
    }
  }

    search(val) {
      let currentNode = this.root
      while(currentNode !== null){
        if(val === currentNode.val){
          return true
        }else if(val < currentNode.val){
          currentNode = currentNode.left
        }else{
          currentNode = currentNode.right
        }
      }
      return false
    }




    preOrderTraversal(currentNode = this.root, result = []) {
      if (currentNode !== null) {
        console.log(currentNode.val); // Log the current node value
        result.push(currentNode.val); // Add the current node value to the result array
        this.preOrderTraversal(currentNode.left, result);
        this.preOrderTraversal(currentNode.right, result);
      }
      return result;
    }


    inOrderTraversal(currentNode = this.root, result = []) {
     if(currentNode !== null){
      this.inOrderTraversal(currentNode.left, result)
      console.log(currentNode.val)
      result.push(currentNode.val)
      this.inOrderTraversal(currentNode.right, result)
     }
     return result;
    }

    postOrderTraversal(currentNode = this.root, result = []) {
      result = []
      if(currentNode !== null){
        this.postOrderTraversal(currentNode.left, result)
        this.postOrderTraversal(currentNode.right, result)
        console.log(currentNode.val)
        result.push(currentNode.val)
      }
      return result;
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      const result = [];
      const queue = [];
      let currentNode = this.root;

      if(currentNode !== null){
        queue.push(currentNode)
      }

      while(queue.length > 0){
        currentNode = queue.shift()
        console.log(currentNode.val)
        result.push(currentNode.val)

        if(currentNode.left !== null){
          queue.push(currentNode.left)
        }

        if(currentNode.right !== null){
          queue.push(currentNode.right)
        }
      }
      return result
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      const stack = []
      stack.push(this.root)

      while(stack.length){
        let node = stack.pop()
        console.log(node.val)

        if(node.left){
          stack.push(node.left)
        }
        if(node.right){
          stack.push(node.right)
        }
      }
    }

  }




  module.exports = { BinarySearchTree, TreeNode };
