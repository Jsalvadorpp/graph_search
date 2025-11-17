class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        const len = this.heap.length
        this.heap.push(value)
        
        let valueIndex = len
        let parentIndex = Math.floor((valueIndex - 1) / 2)

        if (this.heap[valueIndex] < this.heap[parentIndex]) {
            this._bubbleUp(this.heap[valueIndex], valueIndex, parentIndex)
        }
    }

    _bubbleUp(value, valueIndex, parentIndex) {
        if (valueIndex <= 0) return
        
        const temp = this.heap[parentIndex]

        this.heap[parentIndex] = value
        this.heap[valueIndex] = temp

        
        valueIndex = parentIndex
        parentIndex = Math.floor((valueIndex - 1) / 2)


        if (this.heap[valueIndex] < this.heap[parentIndex]) {
            this._bubbleUp(this.heap[valueIndex], valueIndex, parentIndex)
        }
    }

    get array() {
        return this.heap
    }

    get extractMin() {
        const valueToReturn = this.heap.shift() //shift and unshift is inefficient,
        let newRoot = this.heap.pop()        // is better to just swap and then pop last element

        let rootIndex = 0
        this.heap.unshift(newRoot)

        this._bubbleDown(rootIndex)


        return valueToReturn
    }

    _bubbleDown = (rootIndex) => {
        if (rootIndex >= this.heap.length) return;

        const leftNodeIndex = 2 * rootIndex + 1;
        const rightNodeIndex = 2 * rootIndex + 2;

        // stop if no children
        if (leftNodeIndex >= this.heap.length) return;

        const newRoot = this.heap[rootIndex];
        const left = this.heap[leftNodeIndex];
        const right = this.heap[rightNodeIndex];

        // both children exist
        if (rightNodeIndex < this.heap.length) {
            const smallerIndex = left < right ? leftNodeIndex : rightNodeIndex;
            if (this.heap[smallerIndex] < newRoot) {
                const temp = this.heap[smallerIndex];
                this.heap[smallerIndex] = newRoot;
                this.heap[rootIndex] = temp;
                this._bubbleDown(smallerIndex);
            }
        }
        // only left child exists
        else if (left < newRoot) {
            const temp = this.heap[leftNodeIndex];
            this.heap[leftNodeIndex] = newRoot;
            this.heap[rootIndex] = temp;
            this._bubbleDown(leftNodeIndex);
        }
    }
}

const myHeap = new MinHeap()
const array = [3, 5, 7, 9, 8, 10, 4]
array.forEach(v => myHeap.insert(v))

console.log(myHeap.array);

myHeap.extractMin
console.log(myHeap.array);

