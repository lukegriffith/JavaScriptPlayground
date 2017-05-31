

// Built a function to generate a node object
function Node(value){

    obj = new Object

    obj.value = value
    obj.left = null
    obj.right = null

    return obj
}

function Insert(Tree, NewValue) {

    if (Tree == null) {
        return Node(NewValue)
    }
    else if (Tree.value > NewValue) {
        Tree.left = Insert(Tree.left, NewValue)
    }
    else if (Tree.value < NewValue) {
        Tree.right = Insert(Tree.right, NewValue)
    }
    else {

    }
    return Tree
}


treeRoot = Insert(null, "G")

function buildTree(element, index, array) {
    Insert(treeRoot, element)
}

["A","B","C","D","E","F","H","I","J","K","L","M","N","O","P"].forEach(buildTree)


// Created an alphabetically sorted binary tree

//   treeRoot = Node("G", null, null, null )
//   
//   d = treeRoot.left = Node("D", treeRoot)
//   
//   b = d.left = Node("B", d)
//   a = b.left = Node("A", b)
//   c = b.right = Node("C", b)
//   
//   f = d.right = Node("F", d)
//   e = f.left = Node("E", f)
//   
//   k = treeRoot.right = Node("K", treeRoot)
//   
//   i = k.left = Node("I",k)
//   h = i.left = Node("H",i)
//   j = i.right = Node ("J",i)
//   
//   m = k.right = Node("M",k)
//   l = m.left = Node("L",m)


// function ripped form computer science book to search tree.

function Search(Tree, TargetValue) {
    if  (Tree == null) {
        return null
    }
    else if (Tree.value == TargetValue) {
        return Tree
    }
    else if (TargetValue < Tree.value) {
        return Search(Tree.left, TargetValue)
    }
    else if (TargetValue > Tree.value) {
        return Search(Tree.right, TargetValue)
    }
}


// function to print tree

function PrintTree(Tree) {

    if (Tree != null) {
        PrintTree(Tree.left)
        console.log(Tree.value)
        PrintTree(Tree.right)
    }
}


PrintTree(treeRoot)

console.log(treeRoot)