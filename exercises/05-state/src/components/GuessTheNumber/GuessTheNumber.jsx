import React, { useState } from 'react';

const GuessTheNumber = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('There is a random number we choose from 1 to 10. Guess what?');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);

  const validateAndSubmitGuess = () => {
    const guessNum = Number(guess);
    if (!guess || guessNum < 1 || guessNum > 10) {
      setMessage('Please enter a valid number between 1 and 10.');
    } else {
      if (guessNum < randomNumber) {
        setMessage(`Too low! The correct number was ${randomNumber}`);
      } else if (guessNum > randomNumber) {
        setMessage(`Too high! The correct number was ${randomNumber}`);
      } else {
        setMessage('Correct! You win!');
      }
      setRandomNumber(Math.floor(Math.random() * 10) + 1);
    }
  };

  return (
    <div>
      <input type="number" value={guess} onChange={e => setGuess(e.target.value)} />
      <button onClick={validateAndSubmitGuess}>Submit Guess</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GuessTheNumber;
