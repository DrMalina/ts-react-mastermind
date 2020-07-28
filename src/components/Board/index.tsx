import React from 'react';
import { Row } from '../Row';
import { SecretCode } from '../SecretCode';
import { UserControlPanel } from '../UserControlPanel';
import { ROWS_NUMBER } from '../../shared';

export const Board = () => {
  return (
    <div className="board-wrapper">
      <div className="board">
        <SecretCode />
        <div className="board-rows">
          {[...Array(ROWS_NUMBER)].map((_, idx) => (
            <Row key={ROWS_NUMBER - idx} id={(ROWS_NUMBER - idx).toString()} />
          ))}
        </div>
      </div>
      <UserControlPanel />
    </div>
  );
};
