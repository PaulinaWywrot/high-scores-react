const PlayerScore = (props) => {
  return (
    <div className="score-container">
      {props.scores.sort(props.sortFunction).map((score, i) => {
        return (
          <div className="name-score-flex" key={i}>
            <p className="name">{score.n}</p>
            <p className="score">{score.s}</p>
          </div>
        );
      })}
    </div>
  );
};
export default PlayerScore;
// {country.scores.map((score) => {
//               return (
//                 <div class="flexbox">
//                   <div class="flex">
//                     <p class="name">{score.n.toUpperCase()} </p>
//                     <p class="score">{score.s}</p>
//                   </div>
//                 </div>
//               );
//             })}
