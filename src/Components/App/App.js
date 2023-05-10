import React from "react";
import "./App.css";
import Game from "../Game";


export default function App() {
  document.title = 'Pop Showdown'; // Set the new document title


  return (
    <div className="App">
      <h1 className="pagetitle">Pop Showdown</h1>
      <h3>The hopefully fun energiser game where the cohort votes for which country has the highest population!</h3>
      <div className="container">
        <Game />
      </div>
      
      

      </div>
  );
}
