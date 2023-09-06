import { useMemo } from "react";
import styles from "./MoviesCardList.module.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import movies from "../../utils/constants";

const MoviesCardList = ({ savedMovies }) => {
  const filteredMovies = useMemo(
    () => movies.filter((movie) => movie.saved === true),
    []
  );

  const renderMovies = savedMovies ? filteredMovies : movies;

  return (
    <ul className={styles.MoviesCardList}>
      {renderMovies.map(({ nameRU, duration, image, saved, id }) => (
        <MoviesCard
          key={id}
          nameRU={nameRU}
          duration={duration}
          image={image}
          saved={saved}
        />
      ))}
    </ul>
  );
};
export default MoviesCardList;
