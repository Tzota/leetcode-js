import {singleNumber} from '../136.SingleNumber';

describe('136. Single Number', () => {
    it('[2,2,1]', () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });
    it('[4,1,2,1,2]', () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });
    it('[1]', () => {
        expect(singleNumber([1])).toBe(1);
    });
});
