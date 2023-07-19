import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation().pathname;
  return (
    <nav className={styles.Navigation}>
      <Link
        to="/movies"
        className={cn(styles.link, {
          [styles.selectLink]: location === "/movies",
        })}
      >
        Фильмы
      </Link>
      <Link
        to="/saved-movies"
        className={cn(styles.link, {
          [styles.selectLink]: location === "/saved-movies",
        })}
      >
        Сохранённые фильмы
      </Link>
    </nav>
  );
};

export default Navigation;
