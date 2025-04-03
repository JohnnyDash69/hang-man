import React from "react";

export default function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word">
      {word
        .split("")
        .map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index}>{letter}</span>
          ) : (
            <span key={index}>_</span>
          )
        )}
    </div>
  );
}
