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
    [0,2,], //1 
    [1,5], //2
    [0,6], //3 
    [], //4 
    [2,8], //5
    [3,7,9], //6 
    [8,6,10], //7
    [7,5,11], //8
    [6,10,12],//9
    [7,8,11,13],//10
    [8,10,14],//11
    [9,13,15],//12
    [10,12,14,16],//13
    [11,13,17],//14
    [12,16,18],//15
    [13,15,17,19],//16
    [14,16,20],//17
    [15,19,20],//18
    [16,18,20],//19
    [17,19]//20
]

var source = 0 

