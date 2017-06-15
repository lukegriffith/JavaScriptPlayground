
var grid = document.getElementById("grid");



var Stack = function(){
    this.items = [];
}
Stack.prototype.isEmpty = function(){
    this.items.length != 0;
}
Stack.prototype.pop = function() {
    return this.items.pop();
}
Stack.prototype.push = function(obj) {
    this.items.push(obj);
}




var CellClickEvent = function(){
    console.log(this);

    var stack = new Stack();

    var pathInfo = bfs(AdjList, source);

    var v = pathInfo[this.id];

    while (v.predecessor != null) {
        stack.push(v.predecessor);
        v = pathInfo[v.predecessor];
    }


    console.log(this.id);
    console.log(stack);

/*
    grid.children.forEach(function (currentValue,i,o) {
        console.log(currentValue);
    })
*/
    cells = grid.children; 

    console.log(cells);

    for (var i = 0; i < cells.length; i++){

        console.log(cells[i]);
        var cell = cells[i]
        cell.className = "cell";
    }

    source = Number(this.id);

    grid.children[source].className = "cell active";

    while (!stack.isEmpty()){
        var i = stack.pop();
        var cell = cells[i];
        console.log(cell);
        console.log(i);
        cell.className = "cell path";
    }

    
}


for (var i = 0; i < grid.children.length; i++) {
    grid.children[i].onclick = CellClickEvent;
}