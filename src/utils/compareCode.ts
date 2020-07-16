import { Hints } from '../shared/';

export const compareCode = (code: number[], guess: number[]): Hints => {
  const guessCopy = [...guess];

  return code.reduce(
    (acc, item, idx) => {
      if (guessCopy.includes(item)) {
        if (code[idx] === guessCopy[idx]) {
          acc['black']++;
          guessCopy[idx] = -1; // to not count that same element again in next iteration
        } else {
          acc['white']++;
          guessCopy[guessCopy.indexOf(item)] = -1;
        }
      }
      return acc;
    },
    { black: 0, white: 0 },
  );
};
