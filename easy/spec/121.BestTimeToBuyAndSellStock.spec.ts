import {maxProfit} from '../121.BestTimeToBuyAndSellStock';
describe('121. Best Time to Buy and Sell Stock', () => {
    it('[7,1,5,3,6,4]', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });
    it('[7,6,4,3,1]', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });
    it('[7,1,5,0,6,4]', () => {
        expect(maxProfit([7, 1, 5, 0, 6, 4])).toBe(6);
    });
    it('[1,2]', () => {
        expect(maxProfit([1, 2])).toBe(1);
    });
    it('[2,1]', () => {
        expect(maxProfit([2, 1])).toBe(0);
    });
    it('[1,2,4]', () => {
        expect(maxProfit([1, 2, 4])).toBe(3);
    });
    it('[1,5,0,2]', () => {
        expect(maxProfit([1, 5, 0, 2])).toBe(4);
    });
});
