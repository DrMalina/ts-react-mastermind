import { useContext } from 'react';
import { AppStateContext } from './AppStateContext';

export const useAppState = () => {
  return useContext(AppStateContext);
};
