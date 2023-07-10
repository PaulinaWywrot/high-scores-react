import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./allCountryScores";

function App() {
  return (
    <div className="App">
      <HighScoreTable results={allCountryScores} />
    </div>
  );
}

export default App;
