import { useState } from "react";
import { Helmet } from 'react-helmet';
import "./App.css";
import Game from "../Game";
import Single from "../Single";


export default function App() {
  document.title = 'SOC_Pop'; // Set the new document title
  const [gameModeChosen, setGameModeChosen] = useState(false);
  const [cohort, setCohort] = useState(false);
  const [single, setSingle] = useState(false);
  const [switchMode, setSwitchMode] = useState(false);

  function handleClickCohort() {
    setSwitchMode(true);
    setGameModeChosen(true);
    setCohort(true);
  }

  function handleClickSingle() {
    setSwitchMode(true);
    setGameModeChosen(true);
    setSingle(true);
  }

  function handleClickSwitch() {
    if (cohort) {
      setCohort(false);
      setSingle(true);
    }
    if (single) {
      setCohort(true);
      setSingle(false);
    }
  }

  return (
    <div className="App">
      <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Helmet>
      <h1 className="pagetitle">SOC_Pop</h1>
      <h3 className="tagline">The hopefully fun energiser game where the cohort votes for which country has the highest population!</h3>
      {!gameModeChosen && (
      <div id="modebuttons">
        <button id="cohortbutton" onClick={handleClickCohort}>Cohort mode</button>
        <button id="solobutton" onClick={handleClickSingle}>Single player mode</button>
      </div>)}
      {switchMode && (<button id="switchgame123" onClick={handleClickSwitch}>Switch game mode</button>)}
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
