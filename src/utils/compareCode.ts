import { Hints } from '../shared/';

export const compareCode = (code: number[], guess: number[]): Hints => {
  const guessCopy = [...guess];
  const codeCopy = [...code];
  const results = { black: 0, white: 0 };

  // First check all RIGHT PEGS that are in RIGHT SPOT
  for (let i = 0; i < code.length; i++) {
    if (codeCopy[i] === guessCopy[i]) {
      results.black++;
      // set negative values to not count those spots in other iterations
      codeCopy[i] = -1;
      guessCopy[i] = -2;
    }
  }

  // Then check if there are any right pegs left (digits) but NOT in right spots
  for (let j = 0; j < code.length; j++) {
    if (guessCopy.includes(codeCopy[j])) {
      results.white++;
      guessCopy[guessCopy.indexOf(codeCopy[j])] = -2;
    }
  }
  return results;
};
