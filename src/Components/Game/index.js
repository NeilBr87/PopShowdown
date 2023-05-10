import { useState } from "react";
import Countrycard from "../Countrycard";
import "./style.css";

export default function Game(props) {
  const [countryData, setCountryData] = useState(null);
  const [countryData1, setCountryData1] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [answerClicked, setAnswerClicked] = useState(false);
  const [comparison1, setComparison1] = useState(props.comparison);
  const [correct, setCorrect] = useState(null);
  const [countryName, setCountryName] = useState();
  const [countryName1, setCountryName1] = useState(null);
  const [country1pop, setCountry1pop] = useState(null);
  const [country2pop, setCountry2pop] = useState(null);
  const [hideAnswerButton, setHideAnswerButtons] = useState(true);


  function formatPopulation(number) {
    return number ? number.toLocaleString() : "";
  }

  function handleClick(event) {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
        const randomnumberchoice = Math.floor(Math.random() * 245);
        const randomnumberchoice1 = Math.floor(Math.random() * 245);
        setAnswerClicked(false);
        setHideAnswerButtons(false);
        setCountryData(data[randomnumberchoice]);
        setCountryData1(data[randomnumberchoice1]);
        setCountryName(data[randomnumberchoice].name.common);
        setCountryName1(data[randomnumberchoice1].name.common);
        setCountry1pop(data[randomnumberchoice].population);
        setCountry2pop(data[randomnumberchoice1].population);
        setButtonClicked(true);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }

  function handleClick1() {
    if (country1pop > country2pop) {
      setCorrect(`${countryName}!`);
      setComparison1(`${countryName} has a population of ${formatPopulation(country1pop)}, whereas ${countryName1} only has a population of ${formatPopulation(country2pop)}!`)
    }
    if (country1pop < country2pop) {
      setCorrect(`${countryName1}!`);
      setComparison1(`${countryName} only has a population of ${formatPopulation(country1pop)}, whereas ${countryName1} has a population of ${formatPopulation(country2pop)}!`)
    }
    setAnswerClicked(true);
    setHideAnswerButtons(true);
  }

  function handleClick2(event) {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
        const randomnumberchoice = Math.floor(Math.random() * 245);
        const randomnumberchoice1 = Math.floor(Math.random() * 245);
        setAnswerClicked(false);
        setCountryData(data[randomnumberchoice]);
        setCountryData1(data[randomnumberchoice1]);
        setCountryName(data[randomnumberchoice].name.common);
        setCountryName1(data[randomnumberchoice1].name.common);
        setCountry1pop(data[randomnumberchoice].population);
        setCountry2pop(data[randomnumberchoice1].population);
        setButtonClicked(true);
        setHideAnswerButtons(false);

      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }



  return (
    <div className="App">
    {!buttonClicked && (
      <button className="countrybutton" onClick={handleClick}>
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
                <button className="countrybutton" onClick={handleClick1}>
                  Reveal the Answer!
                </button>
              </div>
            </div>)};
    
          {answerClicked && (
            <div className="outcome">
              <h3>Highest:</h3>
              <h2 id="correct">{correct}</h2>
              <p>{comparison1}</p>
              <button className="nextbutton" onClick={handleClick2}>Next round!</button>
            </div>
          )}
        </div>
    </div>
  );
}