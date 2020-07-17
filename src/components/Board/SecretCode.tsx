import React from 'react';
import { SOCKETS_NUMBER } from '../../shared';
import { useAppState } from '../../context/AppStateContext';

export const SecretCode = () => {
  const {
    state: { isWin, secretCode },
  } = useAppState();

  const renderSockets = () => {
    if (typeof isWin !== 'undefined') {
      return secretCode.map((item, idx) => {
        return (
          <div key={idx} className="secret-code__socket row-socket__filled">
            {item}
          </div>
        );
      });
    } else {
      return [...Array(SOCKETS_NUMBER)].map((_item, idx) => {
        return (
          <div key={idx} className="secret-code__socket">
            ?
          </div>
        );
      });
    }
  };

  return (
    <div className="secret-code">
      <span>Secret code</span>
      <div className="secret-code__sockets bold">{renderSockets()}</div>
    </div>
  );
};
