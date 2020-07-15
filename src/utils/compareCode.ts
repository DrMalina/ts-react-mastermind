import { Hints } from '../shared/';

export const compareCode = (code: number[], guess: number[]): Hints => {
  return guess.reduce(
    (acc, item, idx) => {
      if (code.includes(item)) {
        if (code[idx] === guess[idx]) {
          acc['black'] = acc['black'] + 1;
        } else {
          acc['white'] = acc['white'] + 1;
        }
      }
      return acc;
    },
    { black: 0, white: 0 },
  );
};
