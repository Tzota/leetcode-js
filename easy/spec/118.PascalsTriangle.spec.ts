import {generate} from '../118.PascalsTriangle';

describe("118.Pascal's Triangle", () => {
    it('0', () => {
        expect(generate(0)).toMatchObject([]);
    });
    it('1', () => {
        expect(generate(1)).toMatchObject([[1]]);
    });
    it('2', () => {
        expect(generate(2)).toMatchObject([[1], [1, 1]]);
    });
    it('3', () => {
        expect(generate(3)).toMatchObject([[1], [1, 1], [1, 2, 1]]);
    });
    it('5', () => {
        expect(generate(5)).toMatchObject([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
});
