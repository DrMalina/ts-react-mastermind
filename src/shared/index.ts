export const ROWS_NUMBER = 8;

export const SOCKETS_NUMBER = 4;

export const OPTIONS_NUMBER = 6;

export const optionsArray = [...Array(OPTIONS_NUMBER)].map((_item, idx) => idx);

export interface Hints {
  black: number;
  white: number;
}

export interface History {
  guess: number[];
  hints: Hints;
}

export interface AppState {
  secretCode: number[];
  currentGuess: number[];
  history: History[];
  currentRowIndex: number;
  isWin: undefined | boolean;
}
