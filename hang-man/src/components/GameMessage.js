import React from "react";
import { Button } from "react-bootstrap";

export default function GameMessage({
  word,
  guessedLetters,
  incorrectGuesses,
  maxAttempts,
  onRestart,
}) {
  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectGuesses >= maxAttempts;

  return (
    <div className="game-message">
      {isWinner && (
        <p className="text-success">🎉 You Won! The word was "{word}".</p>
      )}
      {isLoser && (
        <p className="text-danger">😢 You Lost! The word was "{word}".</p>
      )}
      {(isWinner || isLoser) && (
        <Button variant="primary" onClick={onRestart}>
          Restart
        </Button>
      )}
    </div>
  );
}
