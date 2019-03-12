
// class Graph {
//   // defining vertex array and
//   // adjacent list
//   constructor(noOfVertices)
//   {
//       this.noOfVertices = noOfVertices;
//       this.AdjList = new Map();
//   }

//   // functions to be implemented

//   // add vertex to the graph
//   addVertex(v)
//   {
//       // initialize the adjacent list with a
//       // null array
//       this.AdjList.set(v, []);
//   }
//   // add edge to the graph
//   addEdge(v, w)
//   {
//       // get the list for vertex v and put the
//       // vertex w denoting edge betweeen v and w
//       this.AdjList.get(v).push(w);

//       // Since graph is undirected,
//       // add an edge from w to v also
//       this.AdjList.get(w).push(v);
//   }
//   // Prints the vertex and adjacency list
//   printGraph()
//   {
//       // get all the vertices
//       var get_keys = this.AdjList.keys();

//       // iterate over the vertices
//       for (var i of get_keys)
//   {
//           // great the corresponding adjacency list
//           // for the vertex
//           var get_values = this.AdjList.get(i);
//           var conc = "";

//           // iterate over the adjacency list
//           // concatenate the values into a string
//           for (var j of get_values)
//               conc += j + " ";

//           // print the vertex and its adjacency list
//           console.log(i + " -> " + conc);
//       }
//   }

//   // dfs(v)
//   dfs(startingNode) {
//     function traverse(map, visited = {}, stack = []) {

//     }
//     const visited =


//   }

// }

// // Using the above implemented graph class
// var g = new Graph(6);
// var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//     g.addVertex(vertices[i]);
// }

// // adding edges
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// g.printGraph();










/////////////////////////////////////////////////////////////////// New Solution ///////////////////////////////////////////////////////////////////////

// undirected
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
    // this.adjList[vertex2].push(vertex1);

  }

  dfs(startingVertex) {
    const vertices = [startingVertex, ...Object.keys(this.adjList)].filter((val, i, array)=> array.indexOf(val) !== i ? false : true);
    console.log('vertices', vertices);
    const visited = {};
    for (let i = 0; i < vertices.length; i ++) {
      this.dfsUTIL(vertices[i], visited);
    }

  }

  dfsUTIL(vertex, visited = {}) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      // stack.push(vertex);
      console.log('vertex', vertex)
      let neighbors = this.adjList[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        this.dfsUTIL(neighbors[i], visited);
      }
    }
  }

}


const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');


graph.addEdge('A', 'B');
graph.addEdge('D', 'E');
graph.addEdge('C', 'E');
graph.addEdge('A', 'D');
graph.addEdge('A', 'C');
graph.addEdge('E', 'B');


graph.dfs('B')









// dfs() {
//   const nodes = Object.keys(this.adjList);
//   for (let i = 0; i < nodes.length; i++) {
//     this.dfsUTIL(nodes[i]);
//   }
// }

// dfsUTIL (node, visited = {}) {
//   if (!visited[node]) {
//     visited[node] = true;
//     console.log('vertex visited', node);
//     const neighbors = this.adjList[node]
//     for (let i = 0; i < neighbors.length; i++) {
//       this.dfsUTIL(neighbors[i], visited);
//     }
//   }
// }
