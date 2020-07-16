import React, { createContext, useContext, useReducer } from 'react';
import { OPTIONS_NUMBER, Hints } from '../shared';
import { generateCode } from '../utils/generateCode';

interface History {
  guess: number[];
  hints: Hints;
}

interface AppState {
  secretCode: number[];
  currentGuess: number[];
  history: History[];
  currentRowIndex: number;
  isWin: undefined | boolean;
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

interface AppStateProivder {
  children: React.ReactNode;
}

type Action =
  | { type: 'ADD_GUESS'; payload: number }
  | { type: 'UNDO_GUESS' }
  | { type: 'ADD_TO_HISTORY'; payload: Hints }
  | { type: 'SET_WIN'; payload: boolean };

const optionsArray = [...Array(OPTIONS_NUMBER)].map((_item, idx) => idx);

const appData: AppState = {
  secretCode: generateCode(optionsArray, 4),
  currentGuess: [],
  history: [],
  currentRowIndex: 1,
  isWin: undefined,
};

const appStateReducer = (state: AppState, action: Action): AppState => {
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
    default: {
      return state;
    }
  }
};

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: AppStateProivder) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
