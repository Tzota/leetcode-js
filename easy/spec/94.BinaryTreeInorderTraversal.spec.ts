import {TreeNode} from '~/domain/structures/TreeNode';
import {inorderTraversal} from '../94.BinaryTreeInorderTraversal';

describe('94. Binary Tree Inorder Traversal', () => {
    test.each([
        [
            [1, null, 2, 3],
            [1, 3, 2],
        ],
        [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [8, 4, 9, 2, 5, 1, 6, 3, 7],
        ],
        [[], []],
        [[1], [1]],
    ])('%s', (i, e) => expect(inorderTraversal(TreeNode.fromArray(i))).toMatchObject(e));
});
