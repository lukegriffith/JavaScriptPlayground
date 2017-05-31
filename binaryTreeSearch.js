

// Built a function to generate a node object
function Node(value, parent, left, right){

    obj = new Object

    obj.value = value
    obj.parent = parent
    obj.left = left
    obj.right = right

    return obj
}

// Created an alphabetically sorted binary tree

treeRoot = Node("G", null, null, null )

d = treeRoot.left = Node("D", treeRoot)

b = d.left = Node("B", d)
a = b.left = Node("A", b)
c = b.right = Node("C", b)

f = d.right = Node("F", d)
e = f.left = Node("E", f)

k = treeRoot.right = Node("K", treeRoot)

i = k.left = Node("I",k)
h = i.left = Node("H",i)
j = i.right = Node ("J",i)

m = k.right = Node("M",k)
l = m.left = Node("L",m)


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