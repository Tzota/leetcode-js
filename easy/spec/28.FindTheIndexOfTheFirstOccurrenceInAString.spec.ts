import {strStr} from '../28.FindTheIndexOfTheFirstOccurrenceInAString';

describe('28. Find the Index of the First Occurrence in a String', () => {
    test.each([
        ['', '', 0],
        ['', 'asd', -1],
        ['a', 'asd', -1],
        ['a', 'asd', -1],
        ['aaasd', 'aaa', 0],
        ['asdd', 'dd', 2],
        ['asdddd', 'dd', 2],
        ['asddddee', 'dd', 2],
        ['hihitime', 'hitime', 2],
        ['asdasd', 'foo', -1],
    ])('%s %s', (h, n, e) => expect(strStr(h, n)).toBe(e));
});
