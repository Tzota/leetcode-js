import {addBinary} from '../67.AddBinary';

describe('67. Add Binary', () => {
    test.each([
        ['11', '1', '100'],
        ['1010', '1011', '10101'],
        ['1111', '1', '10000'],
        ['1111', '1111', '11110'],
    ])('%s', (a, b, e) => expect(addBinary(a, b)).toBe(e));
});
