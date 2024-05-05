import {twoSum} from '../1.TwoSum';

describe('Two Sum', () => {
    it('1', () => {
        const ans = twoSum([2, 7, 11, 15], 9);

        expect(ans).toMatchObject([0, 1]);
    });

    it('2', () => {
        const ans = twoSum([3, 2, 4], 6);

        expect(ans).toMatchObject([1, 2]);
    });

    it('3', () => {
        const ans = twoSum([3, 3], 6);

        expect(ans).toMatchObject([0, 1]);
    });

    it('4', () => {
        const ans = twoSum([-1, 3, 7, -5], -6);

        expect(ans).toMatchObject([0, 3]);
    });

    it('5', () => {
        const fn = () => twoSum([], -6);

        expect(fn).toThrow();
    });
});
