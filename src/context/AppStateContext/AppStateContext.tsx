import React, { createContext, useReducer } from 'react';
import { Action } from './actions';
import { appStateReducer } from './reducers';
import { AppState, appData } from './state';

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

interface AppStateProivder {
  children: React.ReactNode;
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: AppStateProivder) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
  );
};
