import "./styles.css";

function Form() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
      <div className="rcbamovies-form-container">
        <img
          className="rcbamovies-movie-card-image"
          src={movie.image}
          alt={movie.title}
        />
        <div className="rcbamovies-card-bottom-container">
          <h3>{movie.title}</h3>
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
          <button className="rcbamovies-btn mt-3">
            Cancelar
          </button>
        </div>
      </div>
  );
}

export default Form;
