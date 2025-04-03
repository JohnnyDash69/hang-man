import React, { useState } from "react";

export default function HelpModal() {
  const [show, setShow] = useState(false);

  return (
    <div className="help">
      <button onClick={() => setShow(!show)}>Help</button>
      {show && (
        <div className="help-content">
          <p>How Hangman Works:</p>
          <p>
            Guess the secret word by suggesting one letter at a time. For each
            incorrect guess, part of a figure is drawn. You have limited
            attempts to guess the word before the figure is fully drawn. Win by
            guessing all the letters correctly or lose if you run out of
            attempts!
          </p>
        </div>
      )}
    </div>
  );
}
