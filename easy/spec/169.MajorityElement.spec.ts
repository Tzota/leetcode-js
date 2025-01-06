import {majorityElement} from '../169.MajorityElement';

describe('169. Majority Element', () => {
    it('[3,2,3]', () => {
        expect(majorityElement([3, 2, 3])).toBe(3);
    });
    it('[2,2,1,1,1,2,2]', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });
    it('[3,3,4]', () => {
        expect(majorityElement([3, 3, 4])).toBe(3);
    });
});
