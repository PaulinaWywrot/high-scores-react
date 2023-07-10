import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import { ScoresAscending, ScoresDescending } from "./Sort";
const HighScoreTable = (props) => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div className="main-container">
      <button onClick={handleClick}>
        Sort {active === false ? "Descending" : "Ascending"}
      </button>
      <h1 className="main-title">High Scores per Country</h1>

      {props.results
        .sort((country1, country2) => {
          if (country1.name < country2.name) {
            return -1;
          } else if (country1.name > country2.name) {
            return 1;
          } else {
            return 0;
          }
        })
        .map((country) => {
          return (
            <div className="table-container" key={country.name}>
              <h2 className="country-name">HIGH SCORES: {country.name}</h2>
              <PlayerScore
                scores={country.scores}
                sortFunction={
                  active === false ? ScoresAscending : ScoresDescending
                }
              />
            </div>
          );
        })}
    </div>
  );
};

export default HighScoreTable;
