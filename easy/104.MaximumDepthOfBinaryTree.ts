import {TreeNode} from '~/domain/structures/TreeNode';

export function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    // let lDepth = maxDepth(root.left);
    // let rDepth = maxDepth(root.right);
    // return lDepth > rDepth ? lDepth + 1 : rDepth + 1;

    const stack = [{node: root, depth: 1}];
    let max = 0;

    while (stack.length) {
        const a = stack.pop()!;
        max = Math.max(max, a.depth);
        if (a.node?.left) {
            stack.push({node: a.node.left, depth: a.depth + 1});
        }
        if (a.node?.right) {
            stack.push({node: a.node.right, depth: a.depth + 1});
        }
    }

    return max;
}
