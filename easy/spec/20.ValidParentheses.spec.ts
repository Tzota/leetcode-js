import {isValid} from '../20.ValidParentheses';

describe('20. Valid Parentheses', () => {
    test.each([
        ['()', true],
        ['()[]{}', true],
        ['(}', false],
        ['((((', false],
        ['([{}])', true],
        ['(', false],
        ['}()', false],
    ])('%s', (i, e) => expect(isValid(i)).toBe(e));
});
