import React from 'react';
import { Row } from './Row';
import { SecretCode } from './SecretCode';
import { UserControlPanel } from './UserControlPanel';
import { ROWS_NUMBER } from '../shared';
import { useAppState } from '../context/AppStateContext';

export const Board = () => {
  const { state } = useAppState();

  const logWin = () => {
    switch (state.isWin) {
      case true: {
        return 'true';
      }
      case false: {
        return 'false';
      }

      default: {
        return 'undefined';
      }
    }
  };

  return (
    <>
      <p>
        SecretCode: {state.secretCode} | Guess: {state.currentGuess} | Row: {state.currentRowIndex}{' '}
        | isWin: {logWin()}
      </p>
      <div className="board">
        <SecretCode />
        <div className="board-rows">
          {[...Array(ROWS_NUMBER)].map((_, idx) => (
            <Row key={ROWS_NUMBER - idx} id={(ROWS_NUMBER - idx).toString()} />
          ))}
        </div>
      </div>
      <UserControlPanel />
    </>
  );
};
