const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if (!rootNode) {
    return null
  }
  while (rootNode.left) {
    rootNode = rootNode.left
  }
  return rootNode.val
}

function findMaxBST (rootNode) {
  if (!rootNode) {
    return null
  }
  while (rootNode.right) {
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT (rootNode) {
  if (!rootNode) {
    return null
  }
  let minVal = rootNode.val
  let leftMin = findMinBT(rootNode.left)
  let rightMin = findMinBT(rootNode.right)

  if (leftMin < minVal && leftMin !== null) {
    minVal = leftMin
  }
  if (rightMin < minVal && rightMin !== null) {
    minVal = rightMin
  }

  return minVal
}

function findMaxBT (rootNode) {
  if (!rootNode) {
    return null
  }
  let maxVal = rootNode.val
  let leftMax = findMaxBT(rootNode.left)
  let rightMax = findMaxBT(rootNode.right)

  if (leftMax > maxVal && leftMax !== null) {
    maxVal = leftMax
  }
  if (rightMax > maxVal && rightMax !== null) {
    maxVal = rightMax
  }
7
  return maxVal
}

function getHeight (rootNode) {
  if(!rootNode) {
    return -1
  } else {
    let leftHeight = getHeight(rootNode.left)
    let rightHeight = getHeight(rootNode.right)
    if (leftHeight >= rightHeight) return leftHeight + 1
    else if (leftHeight && rightHeight === null) return 0
    else return rightHeight + 1
  }

}

function balancedTree (rootNode) {
  if(!rootNode) {
    return true
  }

  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right)
  let heightDifference = leftHeight - rightHeight

  if (heightDifference > 1 || heightDifference < -1) {
    return false
  }

  return balancedTree(rootNode.left) && balancedTree(rootNode.right)
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
