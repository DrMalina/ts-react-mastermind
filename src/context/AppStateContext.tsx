import React, { createContext, useContext, useReducer } from 'react';
import { OPTIONS } from '../shared';
import { generateCode } from '../utils/generateCode';

interface AppState {
  secretCode: string[];
  currentGuess: string[];
  currentRowIndex: number;
  isWin: undefined | boolean;
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

interface AppStateProivder {
  children: React.ReactNode;
}

type Action =
  | { type: 'ADD_GUESS'; payload: string }
  | { type: 'UNDO_GUESS'; payload: null }
  | { type: 'INCREMENT_ROW'; payload: null };

const appData: AppState = {
  // secretCode: generateCode(OPTIONS, 4),
  secretCode: ['1', '1', '2', '4'],
  currentGuess: [],
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
    case 'INCREMENT_ROW': {
      return { ...state, currentRowIndex: state.currentRowIndex++ };
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
