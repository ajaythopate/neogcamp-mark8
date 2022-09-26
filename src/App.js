import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🪔": "Diya",
  "🛺 ": "Auto",
   "😠": "Angry",
  "🌈": "Rainbow",
  "🎅": "santa",
  "🌟": "Star",
  "🏆": "Trofy",
  "😔": "sad",
  "💻": "Laptop",
  "🍎": "Apple"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChange(e) {
    var userInput = e.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      setMeaning("Failure to recognise this emoji");
    } else {
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside out!!!</h1>
      <input onChange={inputChange} placeholder="insert your emoji..!" />
      <h3> emoji's we know</h3>
      {meaning}

      <div>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              style={{ cursor: "pointer" }}
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

