import { Hints } from '../shared';

export type Action =
  | { type: 'ADD_GUESS'; payload: number }
  | { type: 'UNDO_GUESS' }
  | { type: 'ADD_TO_HISTORY'; payload: Hints }
  | { type: 'SET_WIN'; payload: boolean }
  | { type: 'RESET_GAME' };
