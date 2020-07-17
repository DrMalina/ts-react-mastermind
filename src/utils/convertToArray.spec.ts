import { convertHintsToArray } from './convertToArray';

describe('convert hints obj to array', () => {
  test("should return ['black','black', 'white']", () => {
    expect(convertHintsToArray({ black: 2, white: 1 })).toStrictEqual(['black', 'black', 'white']);
  });

  test("should return ['white']", () => {
    expect(convertHintsToArray({ black: 0, white: 1 })).toStrictEqual(['white']);
  });

  test('should return empty array', () => {
    expect(convertHintsToArray({ black: 0, white: 0 })).toStrictEqual([]);
  });
});
