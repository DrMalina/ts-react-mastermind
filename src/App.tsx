import React from 'react';
import { Board } from './components/Board';
import { Heading } from './components/Heading';
import { Instructions } from './components/Instructions';
import { Modal } from './components/Modal';

function App() {
  return (
    <>
      <Modal />
      <Heading />
      <div className="container">
        <Instructions />
        <Board />
      </div>
    </>
  );
}

export default App;
