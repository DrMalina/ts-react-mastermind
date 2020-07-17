import { generateCode } from '../../utils/generateCode';
import { Hints, optionsArray } from '../../shared';

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

export const appData: AppState = {
  secretCode: generateCode(optionsArray, 4),
  currentGuess: [],
  history: [],
  currentRowIndex: 1,
  isWin: undefined,
};
