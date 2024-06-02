import {TreeNode} from '~/domain/structures/TreeNode';
import {maxDepth} from '../104.MaximumDepthOfBinaryTree';

describe('104. Maximum Depth of Binary Tree', () => {
    test.each([
        [[3, 9, 20, null, null, 15, 7], 3],
        [[1, null, 2], 2],
        [[1], 1],
        [[], 0],
    ])('%s', (i, e) => expect(maxDepth(TreeNode.fromArray(i))).toBe(e));
});
