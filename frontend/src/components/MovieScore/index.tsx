import MovieStars from "components/MovieStars";
import "./styles.css";

function MovieScore() {
  const score = 3.5;
  const count = 13;

  return (
    <div className="rcbamovies-score-container">
      <p className="rcbamovies-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="rcbamovies-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
