import styles from "./Movies.module.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ savedMovies }) => (
  <div className={styles.Movies}>
    <MoviesCardList savedMovies={savedMovies} />
    {!savedMovies && (
      <button type="button" className={styles.button}>
        Ещё
      </button>
    )}
  </div>
);

export default Movies;
