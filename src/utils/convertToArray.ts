import { Hints } from '../shared/';

// convert hints from obj to array to map over and render JSX elems based on those
// eg: {black: 2, white: 1} => ['black', 'black', 'white']
export const convertHintsToArray = (obj: Hints): string[] => {
  return Object.entries(obj)
    .map((item) => {
      return [...new Array(item[1]).fill(item[0])];
    })
    .flat();
};
