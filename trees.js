class Tree{
    constructor() {
        this.root = null
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
        } else {
            this._bubbleDown(value,this.root)
        }
    
    }

    find(value,root=this.root) {
        if (root == null) return null
        if (value == root.value) return root

        
        const side = value < root.value ? "left" : "right"
        
        if (side == "left") return this.find(value, root.left)
        if (side == "right") return this.find(value, root.right)
    }
    
    getMin(root = this.root) {
        if (root == null) return false
        
        if (root.left) {
            return this.getMin(root.left)
        } else {
            return root.value
        }
    }

    invert(root = this.root) {
        if (root == null) return 
        

        const temp = root.left
        root.left = root.right
        root.right = temp

        this.invert(root.left)
        this.invert(root.right)

        return true
    }

    delete(value,root=this.root) {
        if(root == null) return null

        if (value < root.value) {
            root.left = this.delete(value, root.left)
        } else if (value > root.value) {
            root.right =this.delete(value, root.right)
        } else if (value == root.value){ // value found

            // case 1 - no children nodes
            if (root.left == null && root.right == null){
                return null
            

            // case 2 - both children exists
            } else if (root.left != null && root.right != null) {
                const successor = this._getSuccesor(root.right)

                const temp = root.value
                root.value = successor.value
                successor.value = temp

                root.right = this.delete(successor.value, root.right)
                
            // case 3 - at least 1 child either right/left
            }else{
                return (root.left != null) ? root.left : root.right
            }
        }


        // not value found - not value deleted
        return root
    }

    _getSuccesor(root) {
        if (root.left == null) {
            return root
        } else {
            return this._getSuccesor(root.left)
        }
        
    }
    

    // (Left → Root → Right)
    getInOrder(root = this.root, array = []) {
        if(root == null) return

        this.getInOrder(root.left,array)
        array.push(root.value)
        this.getInOrder(root.right, array)

        return array
    }

    // (Root → Left → Right)
    getPreOrder(root = this.root, array = []) {
        if (root == null) return

        array.push(root.value)
        this.getPreOrder(root.left, array)
        this.getPreOrder(root.right, array)

        return array
    }

    // (Left → Right → Root)
    getPostOrder(root = this.root, array = []) {
        if (root == null) return

        this.getPostOrder(root.left, array)
        this.getPostOrder(root.right, array)
        array.push(root.value)

        return array
    }


    _bubbleDown(value,root){
        const side = (value < root.value) ? "left" : "right"
        
        if (side == "left") {
            if (!root.left) {
                root.left = new Node(value)
            } else {
                this._bubbleDown(value, root.left)
            }
        }

        if (side == "right") {
            if (!root.right) {
                root.right = new Node(value)
            } else {
                this._bubbleDown(value, root.right)
            }
        }
    }

}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


const myTree = new Tree()
const values = [5, 3, 7, 2, 4, 6, 8]
values.forEach(value => myTree.insert(value))
console.log(myTree.getInOrder())
//console.log(myTree.find(3))
//console.log(myTree.getMin())
myTree.delete(5)
console.log(myTree.getInOrder())