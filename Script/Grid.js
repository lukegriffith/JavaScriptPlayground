var Queue = function(){
    this.items = []
};
Queue.prototype.enqueue = function(obj){
    this.items.push(obj)
};
Queue.prototype.dequeue = function(){
    return this.items.shift()
};
Queue.prototype.isEmpty = function(){
    return this.items.length == 0 
};

/*
    performs a breadth-first search on a graph
    @param graph [array] - Graph represented as an adjacency list.
    @param source [int] - source index of the vertex.
*/
function bfs(graph, source) {

    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++){
        bfsInfo[i] = {
            distance: null,
            predecessor: null
        };
    };

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    while(!queue.isEmpty()){

        var u = queue.dequeue();

        for (var i = 0; i < graph[u].length; i++){

            var v = graph[u][i];

            if (bfsInfo[v].distance == null) {

                bfsInfo[v].distance = bfsInfo[u].distance + 1;
                bfsInfo[v].predecessor = u;

                queue.enqueue(v);
            }
        }
    }

    return bfsInfo;

}


var AdjList = [ 
    [1,3], //0
    [0,2,4], //1 
    [1,5], //2
    [0,4,6], //3 
    [3,5,1,7], //4 
    [4,2,8], //5
    [3,7], //6 
    [8,6,4], //7
    [7,5] //8
]

var source = 0 

