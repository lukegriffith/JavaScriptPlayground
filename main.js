var Queue = function(){
    this.items=[]
};
Queue.prototype.enqueue = function(obj){
    this.items.push(obj);
}
Queue.prototype.dequeue = function(){
    return this.items.pop();
}
Queue.prototype.isEmpty = function(){
    return this.items.length === 0;
}


/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
var doBFS = function(graph, source) {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);


    while (!queue.isEmpty()) {
        
        var u = queue.dequeue()

        for (i = 0; i < graph[u].length; i++) {

            var v = graph[u][i]

            if (bfsInfo[v].distance == null){



                bfsInfo[v].distance = bfsInfo[u].distance + 1
                bfsInfo[v].predecessor = u

                queue.enqueue(v)
            }

            
        }
    }

    return bfsInfo;
};



var adjList = [
    [1,3],
    [0,2,4],
    [1,5],
    [0,4,6],
    [5,3,1,7],
    [2,5,8],
    [3,7],
    [6,8,4],
    [7,5],
];

var bfsInfo = doBFS(adjList, 0);
for (var i = 0; i < adjList.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
};