import React from 'react';
import { Row } from './Row';
import { SecretCode } from './SecretCode';
import { UserControlPanel } from './UserControlPanel';

const ROW_NUMBER = 8;

export const Board = () => {
  return (
    <>
      <div className="board">
        <SecretCode />
        <div className="board-rows">
          {[...Array(ROW_NUMBER)].map((_, idx) => (
            <Row key={ROW_NUMBER - idx} id={ROW_NUMBER - idx} />
          ))}
        </div>
      </div>
      <UserControlPanel />
    </>
  );
};
