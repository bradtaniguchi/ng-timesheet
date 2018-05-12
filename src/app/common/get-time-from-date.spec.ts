import { getTimeFromDate } from './get-time-from-date';
describe('getTimeFromDate', () => {
  const testCases = [
    {
      date: new Date(
        2018,
        3,
        8,
        12, // noon 12
        15, // 15 after
        35
      ),
      expected: '12:15'
    },
    {
      date: new Date(2142, 5, 5, 6, 30, 12),
      expected: '06:30'
    },
    {
      date: new Date(2018, 3, 8, 16, 20, 45),
      expected: '16:20'
    }
  ];
  testCases.forEach(testCase => testGetTimeFromDate(testCase));
  function testGetTimeFromDate(testCase) {
    it(`returns expected time ${testCase.date} expected ${
      testCase.expected
    }`, () => {
      const result = getTimeFromDate(testCase.date);
      expect(result).toEqual(testCase.expected);
    });
  }
});
