import { ReactComponent as GitHubIcon } from "assets/img/github.svg";
import './styles.css'

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="rcbamovie-nav-content">
          <h1>RCBA Movies</h1>
          <a href="https://github.com/RodrigoCBArj">
            <div className="rcbamovie-contact-container">
              <GitHubIcon />
              <p className="rcbamovie-contact-link">/RodrigoCBArj</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
