const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F', 'G'],
    F: ['H'],
    G: [],
    H: []
};


const topologySort = (graph) => {
    let visited = {}
    const stack = [] //stack

    Object.keys(graph).forEach(node => {
        if (!visited[node]){
            dfs(graph, node, stack,visited)
        }
    })

    const order = []

    stack.forEach(node => {
        order.unshift(node)

    })
    
    return order
}

const dfs = (graph, start, order, visited) => {
    visited[start] = 1

    graph[start].forEach(edge => {
        if (!visited[edge]) {
            dfs(graph, edge, order, visited)
        }
    })
    order.push(start)

    return visited
}


const output = topologySort(graph)
console.log(output)
