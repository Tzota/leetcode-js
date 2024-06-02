import {TreeNode} from '~/domain/structures/TreeNode';
import {isSymmetric} from '../101.SymmetricTree';

describe('101. Symmetric Tree', () => {
    test.each([
        [[1, 2, 2, 3, 4, 4, 3], true],
        [[1, 2, 2, null, 3, null, 3], false],
    ])('%s', (i, e) => expect(isSymmetric(TreeNode.fromArray(i))).toBe(e)); 
});
