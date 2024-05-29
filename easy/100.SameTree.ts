import {TreeNode} from '~/domain/structures/TreeNode';

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q == null) return true;
    if ((p != null && q == null) || (p == null && q != null)) return false;

    return (
        p?.val === q?.val &&
        isSameTree(p?.left ?? null, q?.left ?? null) &&
        isSameTree(p?.right ?? null, q?.right ?? null)
    );
}
