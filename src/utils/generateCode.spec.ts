import { generateCode } from './generateCode';

describe('generate secret code', () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  test('should have length of 4', () => {
    expect(generateCode(array, 4).length).toBe(4);
  });

  test('result should contain original elements', () => {
    expect(array).toEqual(expect.arrayContaining(generateCode(array, 4)));
  });
});
