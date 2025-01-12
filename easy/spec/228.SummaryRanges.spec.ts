import {summaryRanges} from '../228.SummaryRanges';

describe('228. Summary Ranges', () => {
    it('[0,1,2,4,5,7]', () => {
        expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']);
    });
    it('[0,2,3,4,6,8,9]', () => {
        expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(['0', '2->4', '6', '8->9']);
    });
    it('[1, 2]', () => {
        expect(summaryRanges([1, 2])).toEqual(['1->2']);
    });
    it('[1, 3]', () => {
        expect(summaryRanges([1, 3])).toEqual(['1', '3']);
    });
    it('[1]', () => {
        expect(summaryRanges([1])).toEqual(['1']);
    });
});
