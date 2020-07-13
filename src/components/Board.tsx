import React from 'react';
import { Row } from './Row';
import { SecretCode } from './SecretCode';
import { UserControlPanel } from './UserControlPanel';
import { ROW_NUMBER } from '../shared';
import { useAppState } from '../context/AppStateContext';

export const Board = () => {
  const { state } = useAppState();

  return (
    <>
      <p>
        SecretCode: {state.secretCode} | Guess: {state.currentGuess} | Row: {state.currentRowIndex}
      </p>
      <div className="board">
        <SecretCode />
        <div className="board-rows">
          {[...Array(ROW_NUMBER)].map((_, idx) => (
            <Row key={ROW_NUMBER - idx} id={(ROW_NUMBER - idx).toString()} />
          ))}
        </div>
      </div>
      <UserControlPanel />
    </>
  );
};
