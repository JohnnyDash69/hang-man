import React from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Keyboard({ onGuess, guessedLetters }) {
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)} // Disable if guessed, correct or incorrect
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
