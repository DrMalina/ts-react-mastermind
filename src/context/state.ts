import { generateCode } from '../utils/generateCode';
import { AppState, optionsArray } from '../shared';

export const appData: AppState = {
  secretCode: generateCode(optionsArray, 4),
  currentGuess: [],
  history: [],
  currentRowIndex: 1,
  isWin: undefined,
};
