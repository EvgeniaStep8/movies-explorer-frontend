import styles from "./Movies.module.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ savedMovies }) => (
  <div className={styles.Movies}>
    <MoviesCardList savedMovies={savedMovies} />
  </div>
);

export default Movies;
