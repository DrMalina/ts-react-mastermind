import React from 'react';
import { OPTIONS } from '../shared';
import { useAppState } from '../context/AppStateContext';

export const UserControlPanel = () => {
  const { state, dispatch } = useAppState();

  const addToGuess = (id: string): void => {
    if (state.currentGuess.length < 4) {
      dispatch({ type: 'ADD_GUESS', payload: id });
    }

    return;
  };

  const undoOptionFromGuess = (): void => {
    if (state.currentGuess.length > 0) {
      dispatch({ type: 'UNDO_GUESS' });
    }

    return;
  };

  return (
    <div className="user-control">
      <div className="options">
        {OPTIONS.map((item, idx) => (
          <button key={idx} className="option" id={item} onClick={() => addToGuess(item)}>
            {item}
          </button>
        ))}
      </div>
      <button className="undo" onClick={() => undoOptionFromGuess()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M142.716 293.147l-94-107.602 94-107.602c7.596-8.705 6.71-21.924-1.995-29.527-8.705-7.596-21.917-6.703-29.527 1.995L5.169 171.782c-6.892 7.882-6.892 19.65 0 27.532l106.026 121.372a20.913 20.913 0 0015.771 7.157 20.84 20.84 0 0013.755-5.169c8.706-7.603 9.598-20.822 1.995-29.527z" />
          <path d="M359.93 164.619H20.926C9.368 164.619 0 173.986 0 185.545c0 11.558 9.368 20.926 20.926 20.926H359.93c60.776 0 110.218 49.441 110.218 110.211S420.706 426.893 359.93 426.893H48.828c-11.558 0-20.926 9.368-20.926 20.926 0 11.558 9.368 20.926 20.926 20.926H359.93c83.844 0 152.07-68.219 152.07-152.063s-68.219-152.063-152.07-152.063z" />
        </svg>
      </button>
    </div>
  );
};
