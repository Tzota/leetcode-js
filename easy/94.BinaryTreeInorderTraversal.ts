import {TreeNode} from '~/domain/structures/TreeNode';

export function inorderTraversal(root: TreeNode | null): number[] {
    const a = iterative(root);
    // const a = recursive(root, []);
    return a;
}

function recursive(root: TreeNode | null, ans: number[]): number[] {
    if (!root) return ans;

    recursive(root?.left, ans);
    ans.push(root.val);
    recursive(root?.right, ans);

    return ans;
}

function iterative(root: TreeNode | null): number[] {
    if (!root) return [];

    const stack: TreeNode[] = [];
    const answer = [];
    stack.push(root);

    while (stack.length) {
        const node = stack.shift()!;
        if (node.left) {
            stack.unshift(node);
            stack.unshift(node.left);
            node.left = null;
        } else {
            answer.push(node.val);
            if (node.right) {
                stack.unshift(node.right);
            }
        }
    }

    return answer;
}
