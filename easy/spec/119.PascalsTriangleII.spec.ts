import {getRow} from '../119.PascalsTriangleII';

describe("119. Pascal's Triangle II", () => {
    it('0', () => {
        expect(getRow(0)).toMatchObject([1]);
    });
    it('1', () => {
        expect(getRow(1)).toMatchObject([1, 1]);
    });
    it('2', () => {
        expect(getRow(2)).toMatchObject([1, 2, 1]);
    });
    it('3', () => {
        expect(getRow(3)).toMatchObject([1, 3, 3, 1]);
    });
    it('4', () => {
        expect(getRow(4)).toMatchObject([1, 4, 6, 4, 1]);
    });
});
