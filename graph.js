// Queue class using arrays
class Queue
{
	constructor()
	{
		this.items = [];
	}		
    // isEmpty function
    isEmpty()
    {
        // return true if the queue is empty.
        return this.items.length == 0;
    }
	// enqueue function
    enqueue(element)
    {	
        // adding element to the queue
        this.items.push(element);
    }
    // dequeue function
    dequeue()
    {
        if(this.isEmpty())
            return "No element in the queue";
        return this.items.shift();
    }
}

// create a graph class
class Graph {
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}

    addVertex(v)
    {
        this.AdjList.set(v, []);
    }

    addEdge(v, w)
    {

        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph()
    {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys)
        {
            var get_values = this.AdjList.get(i);
            var conc = "";
            for (var j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }

    // function to performs BFS
    bfs(startingNode)
    {

        // create a visited object
        var visited = {};

        // Create an object for queue
        var q = new Queue();

        // add the starting node to the queue
        visited[startingNode] = true;
        q.enqueue(startingNode);

        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            var getQueueElement = q.dequeue();

            // passing the current vertex to callback function
            console.log(getQueueElement);

            // get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement);

            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (var i in get_List) {
                var neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

    // Main DFS method
    dfs(startingNode)
    {

        var visited = {};

        this.DFSUtil(startingNode, visited);
    }

    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited)
    {
        visited[vert] = true;
        console.log(vert);

        var get_neighbours = this.AdjList.get(vert);

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }



}



var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'G', 'S' ];
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('A', 'S');
g.addEdge('G', 'S');
g.addEdge('B', 'A');
g.addEdge('C', 'A');
g.addEdge('D', 'B');
g.addEdge('D', 'C');
g.addEdge('G', 'D');
g.addEdge('G', 'C');

console.log('Graph Elements: ')
g.printGraph();
console.log('Breadth First Search: ');
console.log(g.bfs('S'));
console.log('Depth First Search: ')
console.log(g.dfs('S'));
