import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useAppState } from '../context/AppStateContext';

export const Modal = () => {
  const { state, dispatch } = useAppState();
  const [isModalClosed, setIsModalClosed] = useState(true);

  const renderMessage = () => {
    if (state.isWin) {
      return (
        <>
          <h3 className="modal-heading">You win</h3>
          <p className="modal-paragraph">
            Neat! You broke the code - <span className="bold">{state.secretCode}</span>
          </p>
          <p>You can let your brain rest now</p>
          <button className="modal-btn" onClick={() => dispatch({ type: 'RESET_GAME' })}>
            Play again
          </button>
          <button className="modal-btn" onClick={() => setIsModalClosed(false)}>
            Close
          </button>
        </>
      );
    } else if (state.isWin === false) {
      return (
        <>
          <h3 className="modal-heading">You lose</h3>
          <p className="modal-paragraph">
            The code was <span className="bold">{state.secretCode}</span>
          </p>
          <p>You can do better for sure!</p>
          <button className="modal-btn" onClick={() => dispatch({ type: 'RESET_GAME' })}>
            Play again
          </button>
          <button className="modal-btn" onClick={() => setIsModalClosed(false)}>
            Close
          </button>
        </>
      );
    }
  };

  return (
    <Popup open={typeof state.isWin !== 'undefined' && isModalClosed} modal closeOnDocumentClick>
      <div className="modal">{renderMessage()}</div>
    </Popup>
  );
};
