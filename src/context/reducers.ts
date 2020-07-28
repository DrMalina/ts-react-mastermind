import { Action } from './actions';
import { appData } from './state';
import { generateCode } from '../utils/generateCode';
import { AppState, optionsArray } from '../shared';

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_GUESS': {
      return { ...state, currentGuess: [...state.currentGuess, action.payload] };
    }
    case 'UNDO_GUESS': {
      return { ...state, currentGuess: [...state.currentGuess.slice(0, -1)] };
    }
    case 'ADD_TO_HISTORY': {
      return {
        ...state,
        currentGuess: [],
        currentRowIndex: state.currentRowIndex + 1,
        history: [...state.history, { guess: state.currentGuess, hints: action.payload }],
      };
    }
    case 'SET_WIN': {
      return { ...state, isWin: action.payload };
    }
    case 'RESET_GAME': {
      return { ...appData, secretCode: generateCode(optionsArray, 4) };
    }
    default: {
      return state;
    }
  }
};
