import {TreeNode} from '~/domain/structures/TreeNode';
import {isSameTree} from '../100.SameTree';

describe('100. Same Tree', () => {
    test.each([
        [[1, 2, 3], [1, 2, 3], true],
        [[1, 2], [1, null, 2], false],
        [[1, 2, 1], [1, 1, 2], false],
    ])('%s', (a, b, e) => {
        const p = TreeNode.fromArray(a);
        const q = TreeNode.fromArray(b);
        const result = isSameTree(p, q);
        expect(result).toBe(e);
    });
});
