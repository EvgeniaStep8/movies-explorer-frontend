import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.NotFoundPage}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.text}>Страница не найдена</p>
      <button
        type="button"
        className={styles.button}
        onClick={onBackButtonClick}
      >
        Назад
      </button>
    </div>
  );
};

export default NotFoundPage;
