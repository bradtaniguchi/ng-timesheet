import { toCommonDate } from './to-common-date';

describe('toCommonDate', () => {
  describe('toCommonDate', () => {
    const testCases = [
      {
        date: new Date(2018, 2, 5),
        expected: '2018-03-05'
      },
      {
        date: new Date(2020, 9, 3),
        expected: '2020-10-03'
      },
      {
        // jan first
        date: new Date(2001, 0, 1),
        expected: '2001-01-01'
      },
    ];
    const ohShit = testCases[1];
    testCases.forEach((testCase) => testToCommonDate(testCase));
    function testToCommonDate(testCase) {
      it(`returns expected date, date: ${testCase.date} expected: ${testCase.expected}`, () => {
        const result = toCommonDate(testCase.date);
        expect(result).toEqual(testCase.expected);
      });
    }
  });
});
