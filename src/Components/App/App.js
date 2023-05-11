import { useState } from "react";
import "./App.css";
import Game from "../Game";
import Single from "../Single";


export default function App() {
  document.title = 'SOC_Pop'; // Set the new document title
  const [gameModeChosen, setGameModeChosen] = useState(false);
  const [cohort, setCohort] = useState(false);
  const [single, setSingle] = useState(false);

  function handleClickCohort() {
    setGameModeChosen(true);
    setCohort(true);
  }

  function handleClickSingle() {
    setGameModeChosen(true);
    setSingle(true);
  }

  return (
    <div className="App">
      <h1 className="pagetitle">SOC_Pop</h1>
      <h3>The hopefully fun energiser game where the cohort votes for which country has the highest population!</h3>
      {!gameModeChosen && (
      <div id="modebuttons">
        <button id="cohortbutton" onClick={handleClickCohort}>Cohort mode</button>
        <button id="solobutton" onClick={handleClickSingle}>Single player mode</button>
      </div>)}
      {cohort && (
      <div className="container">
        <Game />
      </div>)}
      
      {single && (
        <div className="container">
          <Single />
        </div>)}
        
      

      </div>
  );
}
