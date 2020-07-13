export const generateCode = <T>(elements: T[], codeLength: number): T[] | [] => {
  let results = [];

  for (let i = 0; i < codeLength; i++) {
    results.push(elements[Math.floor(Math.random() * elements.length)]);
  }

  return results;
};
