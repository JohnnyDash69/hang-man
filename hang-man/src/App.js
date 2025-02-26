import React, { useState } from "react";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboards";
import HangmanFigure from "./HangmanFigure";
import GameMessage from "./GameMessage";
import HelpModal from "./HelpModal";
import { Button, Container } from "react-bootstrap";
import "./styles.css";

// Word list for the game
const words = [
  "javascript",
  "react",
  "variable",
  "function",
  "component",
  "frontend",
  "backend",
  "developer",
  "programming",
  "algorithm",
  "debugging",
  "database",
  "iteration",
  "recursion",
  "framework",
];

// Function to pick a random word from the list
const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

export default function App() {
  const [word, setWord] = useState(getRandomWord()); // Random word
  const [guessedLetters, setGuessedLetters] = useState([]); // Initialize guessed letters
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Incorrect guesses
  const maxAttempts = 6;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return; // Prevent re-guessing the same letter

    setGuessedLetters([...guessedLetters, letter]); // Add guessed letter to the array
    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1); // Increment incorrect guesses if letter is wrong
    }
  };

  const restartGame = () => {
    setWord(getRandomWord()); // Pick a new random word
    setGuessedLetters([]); // Clear guessed letters
    setIncorrectGuesses(0); // Reset incorrect guesses
  };

  return (
    <Container className="app">
      <h1>Hangman</h1>
      <HangmanFigure incorrectGuesses={incorrectGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
      <GameMessage
        word={word}
        guessedLetters={guessedLetters}
        incorrectGuesses={incorrectGuesses}
        maxAttempts={maxAttempts}
        onRestart={restartGame}
      />
      <Button
        variant="danger"
        onClick={restartGame}
        style={{ marginTop: "10px" }}
      >
        Restart Game
      </Button>
      <HelpModal />
    </Container>
  );
}
