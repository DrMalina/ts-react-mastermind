import React from 'react';

interface RowProps {
  id: number | string;
}

export const Row = ({ id }: RowProps) => {
  return (
    <div className="row" id={id.toString()}>
      <span className="row-numeracy">{id}.</span>
      <div className="row-sockets">
        <div className="row-socket"></div>
        <div className="row-socket"></div>
        <div className="row-socket"></div>
        <div className="row-socket"></div>
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
