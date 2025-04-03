import React from "react";
import "./HangmanFigure.css";

export default function HangmanFigure({ incorrectGuesses }) {
  const parts = [
    <circle key="head" cx="140" cy="70" r="20" className="hangman-part" />, // Head
    <line
      key="body"
      x1="140"
      y1="90"
      x2="140"
      y2="150"
      className="hangman-part"
    />, // Body
    <line
      key="left-arm"
      x1="140"
      y1="110"
      x2="110"
      y2="130"
      className="hangman-part"
    />, // Left arm
    <line
      key="right-arm"
      x1="140"
      y1="110"
      x2="170"
      y2="130"
      className="hangman-part"
    />, // Right arm
    <line
      key="left-leg"
      x1="140"
      y1="150"
      x2="110"
      y2="180"
      className="hangman-part"
    />, // Left leg
    <line
      key="right-leg"
      x1="140"
      y1="150"
      x2="170"
      y2="180"
      className="hangman-part"
    />, // Right leg
  ];

  return (
    <div className="hangman-figure">
      <svg height="250" width="200">
        {/* Gallows */}
        <line x1="10" y1="230" x2="130" y2="230" className="gallows" />{" "}
        {/* Base */}
        <line x1="70" y1="230" x2="70" y2="30" className="gallows" />{" "}
        {/* Pole */}
        <line x1="70" y1="30" x2="140" y2="30" className="gallows" />{" "}
        {/* Top bar */}
        <line x1="140" y1="30" x2="140" y2="50" className="gallows" />{" "}
        {/* Rope */}
        {/* Hangman parts (only show parts based on incorrect guesses) */}
        {parts.slice(0, incorrectGuesses)}
      </svg>
    </div>
  );
}
