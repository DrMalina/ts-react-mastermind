import { compareCode } from './compareCode';

describe('compare guess to a secret code', () => {
  const secretCode = [1, 3, 2, 4];

  test('should return 4 black, 0 white', () => {
    expect(compareCode(secretCode, secretCode)).toStrictEqual({ black: 4, white: 0 });
  });

  test('should return 0 black, 4 white', () => {
    expect(compareCode(secretCode, [4, 2, 3, 1])).toStrictEqual({ black: 0, white: 4 });
  });

  test('should return 0 black, 0 white', () => {
    expect(compareCode(secretCode, [6, 6, 6, 6])).toStrictEqual({ black: 0, white: 0 });
  });

  test('should return 2 black, 2 white', () => {
    expect(compareCode(secretCode, [4, 3, 2, 1])).toStrictEqual({ black: 2, white: 2 });
  });

  test('should return 1 black, 0 white', () => {
    expect(compareCode(secretCode, [1, 1, 1, 1])).toStrictEqual({ black: 1, white: 0 });
    expect(compareCode([1, 1, 2, 4], [1, 0, 0, 0])).toStrictEqual({ black: 1, white: 0 });
  });

  test('should return 0 black, 1 white', () => {
    expect(compareCode(secretCode, [0, 1, 1, 1])).toStrictEqual({ black: 0, white: 1 });
    expect(compareCode([1, 1, 2, 4], [0, 0, 0, 1])).toStrictEqual({ black: 0, white: 1 });
  });
});
