export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    public static fromArray(arr: Array<null | number>): TreeNode | null {
        if (arr.length === 0) return null;

        // Create a queue to store the nodes of the tree
        const queue: TreeNode[] = [];

        // Create the root node of the tree
        const root = new TreeNode(arr[0]!);

        // Add the root node to the queue
        queue.push(root);

        // Loop through the array of values
        for (let i = 1; i < arr.length; i++) {
            // Get the next value in the array
            let value = arr[i];

            // Get the next node in the queue
            const node = queue.shift() as TreeNode;

            // If the value is not null, create a new node and add it to the tree
            if (value != null) {
                node.left = new TreeNode(value);
                queue.push(node.left);
            }

            // Get the next value in the array
            value = arr[i + 1];

            // If the value is not null, create a new node and add it to the tree
            if (value != null) {
                node.right = new TreeNode(value);
                queue.push(node.right);
            }

            // Increment the index by 1
            i++;
        }

        // Return the root of the tree
        return root;
    }

    // public static toArray(head: TreeNode | null): number[] {
    // public toString() {
}
