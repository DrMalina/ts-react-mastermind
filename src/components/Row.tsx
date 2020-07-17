import React from 'react';
import { useAppState } from '../context/AppStateContext/';
import { convertHintsToArray } from '../utils/convertToArray';
import { SOCKETS_NUMBER } from '../shared';

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
          <div key={idx} className="row-socket row-socket__filled">
            {prevGuess[idx]}
          </div>
        );
      });
    } else {
      //  render current guess sockets
      return [...Array(SOCKETS_NUMBER)].map((_item, idx) => {
        if (currentRowIndex === id + 1 && typeof currentGuess[idx] !== 'undefined') {
          return (
            <div key={idx} className="row-socket row-socket__filled">
              {currentGuess[idx]}
            </div>
          );
        }
        // default: return the rest of empty sockets
        return <div key={idx} className="row-socket"></div>;
      });
    }
  };

  const renderHints = (rowId: string): JSX.Element[] => {
    const id = +rowId - 1;

    return [...Array(SOCKETS_NUMBER)].map((_item, idx) => {
      if (history[id]) {
        const hintsArray = convertHintsToArray(history[id].hints);
        return (
          <div
            key={idx}
            className={`row-hint ${hintsArray[idx] ? `row-hint__filled--${hintsArray[idx]}` : ''}`}
          ></div>
        );
      } else {
        return <div key={idx} className="row-hint"></div>;
      }
    });
  };

  return (
    <div className="row" id={id}>
      <span className="row-numeracy">{id}.</span>
      <div className="row-sockets">{renderSockets(id)}</div>
      <div className="row-hints">{renderHints(id)}</div>
    </div>
  );
};
