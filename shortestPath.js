//Dijsktra

const input = {
    A: { B: 4, C: 2 },
    B: { C: 5, D: 10 },
    C: { E: 3 },
    E: { D: 4 },
    D: { F: 11 },
    F: {}
};
const graph = {
    A: { B: 1, C: 4 },
    B: { C: 2, D: 7 },
    C: { E: 3 },
    D: { F: 1 },
    E: { D: 2, F: 5 },
    F: {}
};

const shortestPath = (graph,start,target) => {

    const distances = {}
    const nodes = Object.keys(graph)
    const visited = {}


    nodes.forEach(node => {
        distances[node] = {distance: Infinity, parent: ""}
    })
    distances[start].distance = 0



    nodes.forEach(node => {
        if(!visited[node]){
            visited[node] = 1

            const edges = Object.keys(graph[node])

            edges.forEach(edge => {
                const currentDistance = distances[node].distance == Infinity ? 0 : distances[node].distance
                const edgeDistance = graph[node][edge]
                
                const distance = currentDistance + edgeDistance
                if (distance < distances[edge].distance) {
                    distances[edge] = {distance , parent: node}
                }
            })
        }
    })

    const output = { distance: distances[target].distance, path: [] }

    let backTrackNode = target

    while (distances[backTrackNode].distance != 0) {
        output.path.unshift(backTrackNode)

        backTrackNode = distances[backTrackNode].parent
    }
    output.path.unshift(start)



    return output
}

const output = shortestPath(graph,"A","F")
console.log(output)