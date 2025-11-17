const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F', 'G'],
    F: ['C', 'E', 'H'],
    G: ['E'],
    H: ['F']
};

/* A
├── B ── D
│   └── E ── G
│       └── F ── H
└── C ── F */

const dfsCount = (graph, start, target) => {
    let visited = { [start]: 1 }
    let distance = { [start]: 0 }
    let parentNode = { [start]: 0 }
    let stack = []

    if (start === target) return distance

    stack.push(start)

    while (stack.length > 0) {
        let node = stack.pop() //removes last element of the queue

        for (const edge of graph[node]) {
            if (!visited[edge]) {

                visited[edge] = 1;
                distance[edge] = distance[node] + 1;
                parentNode[edge] = node

                if (edge === target) {
                    let path = []
                    let current = target

                    while (current != start) {
                        path.unshift(current)
                        current = parentNode[current]
                    }
                    path.unshift(start)


                    return { distance: distance[edge], path };
                }

                stack.push(edge);
            }
        }
    }
}


const output = dfsCount(graph, "A", "H")
console.log(output)
