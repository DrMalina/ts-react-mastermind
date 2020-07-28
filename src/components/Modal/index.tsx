import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { useAppState } from '../../context';

export const Modal = () => {
  const { state, dispatch } = useAppState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof state.isWin !== 'undefined') {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [state.isWin]);

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
          <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
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
          <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
            Close
          </button>
        </>
      );
    }
  };

  return (
    <Popup open={isModalOpen} modal closeOnDocumentClick>
      <div className="modal">{renderMessage()}</div>
    </Popup>
  );
};
