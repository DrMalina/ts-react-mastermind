import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { SOCKET_NUMBER } from '../shared';

interface RowProps {
  id: string;
}

export const Row = ({ id }: RowProps) => {
  const {
    state: { currentGuess, currentRowIndex, history },
  } = useAppState();

  const renderSockets = (rowId: string): JSX.Element[] => {
    // convert rowId to number to use it as index on the array
    // -1 because rows ids are counted from 1, not 0 as in arrays
    const id = +rowId - 1;

    // render guesses from state.history for previous rows
    if (history[id]) {
      const prevGuess = history[id].guess;
      return prevGuess.map((_item, idx) => {
        return (
          <div key={idx} className="row-socket row-socket-filled">
            {prevGuess[idx]}
          </div>
        );
      });
    } else {
      //  render current guess sockets
      return [...Array(SOCKET_NUMBER)].map((_item, idx) => {
        if (currentRowIndex === id + 1 && typeof currentGuess[idx] !== 'undefined') {
          return (
            <div key={idx} className="row-socket row-socket-filled">
              {currentGuess[idx]}
            </div>
          );
        }
        // default: return the rest of empty sockets
        return <div key={idx} className="row-socket"></div>;
      });
    }
  };

  return (
    <div className="row" id={id}>
      <span className="row-numeracy">{id}.</span>
      <div className="row-sockets">{renderSockets(id)}</div>
      <div className="row-hints">
        <div className="row-hint"></div>
        <div className="row-hint"></div>
        <div className="row-hint"></div>
        <div className="row-hint"></div>
      </div>
    </div>
  );
};
