import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
  return (
    <div className="rcbamovies-pagination-container">
      <div className="rcbamovies-pagination-box">
        <button className="rcbamovies-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="rcbamovies-pagination-button" disabled={false}>
          <Arrow className="rcbamovies-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
