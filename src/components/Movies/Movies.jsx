import styles from "./Movies.module.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ savedMovies }) => (
  <div className={styles.Movies}>
    <SearchForm />
    <MoviesCardList savedMovies={savedMovies} />
    {!savedMovies && (
      <button type="button" className={styles.button}>
        Ещё
      </button>
    )}
  </div>
);

export default Movies;
