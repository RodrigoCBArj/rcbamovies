import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import "./styles.css";

type Props = {
  movieId : string;
}

function FormCard( { movieId } : Props) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    });

  return (
    <div className="rcbamovies-form-container">
      <img
        className="rcbamovies-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="rcbamovies-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="rcbamovies-form">
          <div className="form-group rcbamovies-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group rcbamovies-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="rcbamovies-form-btn-container">
            <button type="submit" className="rcbamovies-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="rcbamovies-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
