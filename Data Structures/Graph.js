
// directed
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
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
      console.log('vertex', vertex);
      let neighbors = this.adjList[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        this.dfsUTIL(neighbors[i], visited);
      }
    }
  }

  detectCycle() {
    const vertices = Object.keys(this.adjList);
    const visited = {};
    const recStack = {};
    for (let i = 0; i < vertices.length; i++) {
      if (this.detectCycleUTIL(vertices[i], visited, recStack)) {
        return true;
      }
    }
    return false;
  }

  detectCycleUTIL(vertex, visited, recStack) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      recStack[vertex] = true;
      let neighbors = this.adjList[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        // console.log('current node', neighbors[i])
        if (!visited[neighbors[i]] && this.detectCycleUTIL(neighbors[i], visited, recStack)) {
          return true;
        } else if (recStack[neighbors[i]]) {
          return true;
        }
      }
    }
    recStack[vertex] = false;
    return false;
  }

}


const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');



graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'C');

graph.addEdge('C', 'E');

graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('D', 'B');

graph.addEdge('F', 'A');

// console.log('dfs', graph.dfs("A"))

console.log('cycle?', graph.detectCycle())



////////////////////////////////////////////////////////////////////////////////////

// // undirected
// class Graph {
//   constructor() {
//     this.adjList = {};
//   }

//   addVertex(vertex) {
//     this.adjList[vertex] = []
//   }

//   addEdge(vertex1, vertex2) {
//     this.adjList[vertex1].push(vertex2);
//     this.adjList[vertex2].push(vertex1);

//   }

//   dfs(startingVertex) {
//     this.dfsUTIL(startingVertex)
//   }

//   dfsUTIL(vertex, visited = {}) {
//     if (!visited[vertex]) {
//       visited[vertex] = true;
//       // console.log('vertex', vertex);
//       let neighbors = this.adjList[vertex];
//       for (let i = 0; i < neighbors.length; i++) {
//         this.dfsUTIL(neighbors[i], visited);
//       }
//     }
//   }
// }


// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');


// graph.addEdge('A', 'B');
// graph.addEdge('D', 'E');
// graph.addEdge('C', 'E');
// graph.addEdge('A', 'D');
// graph.addEdge('A', 'C');
// graph.addEdge('E', 'B');


// graph.dfs('A');









