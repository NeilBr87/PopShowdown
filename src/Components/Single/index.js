import { useState } from "react";
import Countrycard from "../Countrycard";
import countriesData from '../API/countries.json';
import "./style.css";

export default function Game(props) {
  const [countryData, setCountryData] = useState(null);
  const [countryData1, setCountryData1] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [answerClicked, setAnswerClicked] = useState(false);
  const [comparison1, setComparison1] = useState(props.comparison);
  const [correct, setCorrect] = useState(null);
  const [incorrect, setIncorrect] = useState(null);
  const [countryName, setCountryName] = useState();
  const [countryName1, setCountryName1] = useState(null);
  const [country1pop, setCountry1pop] = useState(null);
  const [country2pop, setCountry2pop] = useState(null);
  const [hideAnswerButton, setHideAnswerButtons] = useState(true);
  const [score , setScore] = useState(0);


  function formatPopulation(number) {
    return number ? number.toLocaleString() : "";
  }

  function handleClick(event) {
    const randomnumberchoice = Math.floor(Math.random() * 245);
    const randomnumberchoice1 = Math.floor(Math.random() * 245);
    setAnswerClicked(false);
    setHideAnswerButtons(false);
    setCountryData(countriesData[randomnumberchoice]);
    setCountryData1(countriesData[randomnumberchoice1]);
    setCountryName(countriesData[randomnumberchoice].name.common);
    setCountryName1(countriesData[randomnumberchoice1].name.common);
    setCountry1pop(countriesData[randomnumberchoice].population);
    setCountry2pop(countriesData[randomnumberchoice1].population);
    setButtonClicked(true);
  }

  function handleClickcountry1() {
    if (country1pop > country2pop) {
      setCorrect("Correct!");
      setIncorrect(null);
      setScore(score + 1);
      setComparison1(`${countryName} has a population of ${formatPopulation(country1pop)}, whereas ${countryName1} only has a population of ${formatPopulation(country2pop)}!`)
    }
    if (country1pop < country2pop) {
      setIncorrect("Incorrect!");
        if (score > 0) {
          setScore(score - 1);
          if (score < 0) {
            setScore(0);
        }
        }
        setCorrect(null);
      setComparison1(`${countryName} only has a population of ${formatPopulation(country1pop)}, whereas ${countryName1} has a population of ${formatPopulation(country2pop)}!`)
    }
    setAnswerClicked(true);
    setHideAnswerButtons(true);
  }

    function handleClickcountry2() {
    if (country2pop > country1pop) {
        setCorrect("Correct!");
        setScore(score + 1);
        setIncorrect(null);
        setComparison1(`${countryName1} has a population of ${formatPopulation(country2pop)}, whereas ${countryName} only has a population of ${formatPopulation(country1pop)}!`)
    }
    if (country2pop < country1pop) {
        setIncorrect("Incorrect!");
        if (score > 0) {
            setScore(score - 1);
            if (score < 0) {
              setScore(0);
          }
          }
        setCorrect(null);
        setComparison1(`${countryName1} only has a population of ${formatPopulation(country2pop)}, whereas ${countryName} has a population of ${formatPopulation(country1pop)}!`)
    }
    setAnswerClicked(true);
    setHideAnswerButtons(true);
    }

    function handleClick2(event) {
      const randomnumberchoice = Math.floor(Math.random() * 245);
      const randomnumberchoice1 = Math.floor(Math.random() * 245);
      setAnswerClicked(false);
      setHideAnswerButtons(false);
      setCountryData(countriesData[randomnumberchoice]);
      setCountryData1(countriesData[randomnumberchoice1]);
      setCountryName(countriesData[randomnumberchoice].name.common);
      setCountryName1(countriesData[randomnumberchoice1].name.common);
      setCountry1pop(countriesData[randomnumberchoice].population);
      setCountry2pop(countriesData[randomnumberchoice1].population);
      setButtonClicked(true);
    }


  return (
    <div className="App">
    {!buttonClicked && (
      <button id="playbutton" className="countrybutton" onClick={handleClick}>
        Play
      </button> )}
      {buttonClicked && (
        <div className="container">
          <div className="countrycontainer">
            <Countrycard
              countryName={countryData?.name?.common}
              countryCapital={countryData?.capital?.[0]}
              countryRegion={countryData?.region}
              countryFlag={countryData?.flags?.png}
            />
          </div>
          <div className="countrycontainer">
            <Countrycard
              countryName={countryData1?.name?.common}
              countryCapital={countryData1?.capital?.[0]}
              countryRegion={countryData1?.region}
              countryFlag={countryData1?.flags?.png}
            />
          </div>
        </div>
      )}
      <div>
      {!hideAnswerButton && (
            <div>
              <h2>Which has the highest population?</h2>
              
              <div className="buttoncontainer">
                <button className="countrybutton" onClick={handleClickcountry1}>
                  {countryName}
                </button>
                <button className="countrybutton" onClick={handleClickcountry2}>
                    {countryName1}
                </button>
              </div>
            </div>)};
    
          {answerClicked && (
            <div className="outcome">
              <h2 id="correct">{correct}</h2>
              <h2 id="incorrect">{incorrect}</h2>
              <p>{comparison1}</p>
              <button className="nextbutton" onClick={handleClick2}>Next round!</button>
            </div>
          )}

          {buttonClicked && (
          <div className="scorebox">
            <p>Score: {score}</p>
          </div>)}
        
        </div>
    </div>
  );
}