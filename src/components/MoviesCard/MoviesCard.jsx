import { useState } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./MoviesCard.module.css";

const MoviesCard = ({ nameRU, duration, image, saved }) => {
  const location = useLocation();
  const isAllMovies = location.pathname === "/movies";
  const [isSaved, setIsSaved] = useState(saved);

  const onSavedButtonClick = () => {
    setIsSaved(true);
  };

  return (
    <li className={styles.MoviesCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>{nameRU}</h2>
        <p className={styles.duration}>{`${duration} минут`}</p>
      </div>
      <img src={image} alt={nameRU} className={styles.image} />
      <div className={styles.footer}>
        <button
          type="button"
          className={cn(styles.button, {
            [styles.deleteButton]: isSaved && !isAllMovies,
          })}
          disabled={isSaved && isAllMovies}
          onClick={onSavedButtonClick}
        >
          {!isSaved && "Сохранить"}
        </button>
      </div>
    </li>
  );
};

export default MoviesCard;
