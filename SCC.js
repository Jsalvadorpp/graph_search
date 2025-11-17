//# Kosaraju
const graph = {
    A: ['B'],
    B: ['C', 'D'],
    C: ['A'],
    D: ['E'],
    E: ['F'],
    F: ['D']
};

/* Output
[
    ['D', 'E', 'F'],
    ['A', 'B', 'C']
] */

const scc = (graph) => {
    const output = []
    const finishTime = dfsLoop(graph)

    const reversedGraph = transposeGraph(graph)


    const visited = {}

    finishTime.forEach(node => {
        if (!visited[node]) {
            let compenents = []

            dfs(reversedGraph, node, visited, compenents)

            output.push(compenents)
         }
    })


    return output
}


const dfsLoop = (graph) => {
    const visited = {}
    const stack = []

    Object.keys(graph).forEach(node => {
        if (!visited[node]) {
            dfs(graph, node, visited, stack)

        }

    })

    return stack
}

const dfs = (graph,start,visited,stack) => {
    visited[start] = 1

    graph[start].forEach(edge => {
        if (!visited[edge]) {
            dfs(graph, edge, visited, stack)

        }
    })
    
    stack.push(start)
}

const transposeGraph = (graph) => {
    const reverseGraph = {}

    Object.keys(graph).forEach(node => {
        graph[node].forEach(edge => {
            if (reverseGraph[edge]) {
                reverseGraph[edge].push(node)
            } else {
                reverseGraph[edge] = [node]
            }
        })
    })

    return reverseGraph

}




const output = scc(graph)
console.log(output)