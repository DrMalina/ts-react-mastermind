import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { SOCKET_NUMBER } from '../shared';

interface RowProps {
  id: string;
}

export const Row = ({ id }: RowProps) => {
  const {
    state: { currentGuess, currentRowIndex },
  } = useAppState();

  return (
    <div className="row" id={id}>
      <span className="row-numeracy">{id}.</span>
      <div className="row-sockets">
        {[...Array(SOCKET_NUMBER)].map((_, idx) => {
          if (currentRowIndex === +id && currentGuess[idx]) {
            return (
              <div key={idx} className="row-socket row-socket-filled">
                {currentGuess[idx]}
              </div>
            );
          }
          return <div key={idx} className="row-socket"></div>;
        })}
      </div>
      <div className="row-hints">
        <div className="row-hint"></div>
        <div className="row-hint"></div>
        <div className="row-hint"></div>
        <div className="row-hint"></div>
      </div>
    </div>
  );
};
