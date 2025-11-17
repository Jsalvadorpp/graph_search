const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E', 'F'],
  D: ['B', 'G'],
  E: ['C'],
  F: ['C', 'H'],
  G: ['D'],
  H: ['F']
};


const start = 'A';
const target = 'H';

const BfsDistance = (graph,start,target) => {
    let visited = { [start]: 1}
    let distance = { [start]: 0}
    let parentNode = { [start]: 0}
    let queue = []
    if(start === target ) return distance

    queue.push(start)

    while(queue.length > 0 ){
        let node = queue.shift() //removes first element of the queue

        for (const edge of graph[node]) {
            if (!visited[edge]) {
                visited[edge] = 1;
                distance[edge] = distance[node] + 1;
                parentNode[edge] = node



                if (edge === target) {
                    let path = []
                    let current = target

                    while(current != start){
                        path.unshift(current)
                        current=parentNode[current]
                    }
                    path.unshift(start)


                    return {distance: distance[edge],path} ;
                }

                queue.push(edge);
            }
        }
    }


    return distance[start]
}

const output = BfsDistance(graph,start,target)

console.log(output)