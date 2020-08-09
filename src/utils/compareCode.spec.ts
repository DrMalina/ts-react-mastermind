import { compareCode } from './compareCode';

describe('compare guess to a secret code', () => {
  const secretCode = [1, 3, 2, 4];

  test('should return 4 black, 0 white', () => {
    expect(compareCode(secretCode, secretCode)).toStrictEqual({ black: 4, white: 0 });
  });

  test('should return 0 black, 4 white', () => {
    expect(compareCode(secretCode, [4, 2, 3, 1])).toStrictEqual({ black: 0, white: 4 });
    expect(compareCode([1, 2, 3, 4], [2, 1, 4, 3])).toStrictEqual({ black: 0, white: 4 });
    expect(compareCode([1, 1, 3, 4], [3, 4, 1, 1])).toStrictEqual({ black: 0, white: 4 });
  });

  test('should return 0 black, 0 white', () => {
    expect(compareCode(secretCode, [6, 6, 6, 6])).toStrictEqual({ black: 0, white: 0 });
  });

  test('should return 0 black, 1 white', () => {
    expect(compareCode(secretCode, [0, 1, 1, 1])).toStrictEqual({ black: 0, white: 1 });
    expect(compareCode([1, 1, 2, 4], [0, 0, 0, 1])).toStrictEqual({ black: 0, white: 1 });
    expect(compareCode([1, 2, 3, 4], [3, 3, 0, 3])).toStrictEqual({ black: 0, white: 1 });
  });

  test('should return 1 black, 0 white', () => {
    expect(compareCode(secretCode, [1, 1, 1, 1])).toStrictEqual({ black: 1, white: 0 });
    expect(compareCode([0, 0, 0, 1], [1, 1, 1, 1])).toStrictEqual({ black: 1, white: 0 });
    expect(compareCode([1, 1, 2, 4], [0, 1, 0, 0])).toStrictEqual({ black: 1, white: 0 });
    expect(compareCode([1, 1, 2, 4], [2, 0, 2, 0])).toStrictEqual({ black: 1, white: 0 });
  });

  test('should return 1 black, 1 white', () => {
    expect(compareCode([1, 2, 2, 3], [3, 2, 4, 5])).toStrictEqual({ black: 1, white: 1 });
    expect(compareCode([4, 1, 2, 2], [0, 3, 4, 2])).toStrictEqual({ black: 1, white: 1 });
  });

  test('should return 1 black, 2 white', () => {
    expect(compareCode([4, 1, 2, 2], [1, 4, 5, 2])).toStrictEqual({ black: 1, white: 2 });
    expect(compareCode([2, 3, 1, 4], [3, 4, 1, 0])).toStrictEqual({ black: 1, white: 2 });
  });

  test('should return 2 black, 2 white', () => {
    expect(compareCode(secretCode, [4, 3, 2, 1])).toStrictEqual({ black: 2, white: 2 });
  });

  test('should return 1 black, 3 white', () => {
    expect(compareCode([1, 3, 4, 5], [4, 3, 5, 1])).toStrictEqual({ black: 1, white: 3 });
  });
});
