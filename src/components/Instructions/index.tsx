import React from 'react';

export const Instructions = () => {
  return (
    <div className="instructions">
      <h2>How to play</h2>
      <p>Your goal is to break the secret code within 8 rounds.</p>
      <p>
        Every game starts with a computer randomly generating 4-digit code from the same 6 options (
        0 to 5 ). Duplicates are allowed, so the code might even be the same digit repeated up to 4
        times, like <span className="italic">3333</span>.
      </p>
      <p>
        In each round you must pick 4 digits from the listed options and computer will evaluate your
        guess by giving you so-called pegs{' '}
        <span className="italic">( think of them as hints )</span> :
      </p>
      <ul className="info-list">
        <li>
          For each digit that is correct and in the right spot you get a{' '}
          <span className="italic">black peg</span>
        </li>
        <li>
          For each digit that is correct but not in the right spot you get a{' '}
          <span className="italic">white peg</span>
        </li>
        <li>
          For each digit that is not included in the secret code you receive{' '}
          <span className="italic">no peg</span>
        </li>
      </ul>
      <p>
        You can get a maxium of 4 hints per round and they will be displayed on the right to your
        guess.
      </p>
      <h3>Example:</h3>
      <p>
        Secret code is <span className="bold">1124</span>
      </p>
      <ul>
        <li>
          Guess of <span className="bold">0123</span> will result in{' '}
          <span className="bold">2 black pegs and 0 white</span>
        </li>
        <li>
          Guess of <span className="bold">4315</span> will result in{' '}
          <span className="bold">0 black pegs and 2 white</span>
        </li>
        <li>
          Guess of <span className="bold">2411</span> will results in{' '}
          <span className="bold">4 white pegs</span>
        </li>
      </ul>
      <p style={{ marginTop: '30px' }}>You have 8 rounds to guess the code and win the game.</p>
      <p>Good luck!</p>
    </div>
  );
};
