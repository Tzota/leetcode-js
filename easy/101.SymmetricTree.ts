import {TreeNode} from '~/domain/structures/TreeNode';

function compare(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) return true;

    if (left?.val !== right?.val) return false;

    return compare(left?.left ?? null, right?.right ?? null) && compare(left?.right ?? null, right?.left ?? null);
}

export function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true; // to be honest they say that the number of nodes in the tree is in the range [1, 1000].

    return compare(root.left, root.right);
}
