const graph = {
  1: [3, 5],
  3: [1, 5],
  5: [1, 3, 7, 9],
  7: [5],
  9: [5],
  2: [4],
  4: [2],
  6: [8, 10],
  8: [6, 10],
  10: [6, 8]
};


const BfsConnection= (graph) => {
    const connections = []
    const allNodes = Object.keys(graph)
    let exploredNodes = {}


    for(const node of allNodes){
        if(!exploredNodes[node]){
            const visitedNodes = BFS(graph,node)
            exploredNodes = {...exploredNodes,...visitedNodes}

            connections.push(Object.keys(visitedNodes))
        }
    }


  

    return connections
}

const BFS = (graph,start) => {
    let visited = { [start]: 1}
    let queue = []

    queue.push(start)

    while(queue.length > 0 ){
        let node = queue.shift() //removes first element of the queue

        for (const edge of graph[node]) {
            if (!visited[edge]) {
                visited[edge] = 1;

                queue.push(edge);
            }
        }
    }


    return visited
}

const output = BfsConnection(graph)
console.log(output)