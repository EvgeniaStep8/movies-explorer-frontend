import styles from "./SearchForm.module.css";
import searchIcon from "../../images/search-icon.svg";

const SearchForm = () => (
  <div className={styles.SearchForm}>
    <div className={styles.container}>
      <img src={searchIcon} alt="Иконка поиска" className={styles.icon} />
      <input type="text" placeholder="Фильм" className={styles.input} />
      <button type="submit" aria-label="Найти" className={styles.button} />
    </div>
    <label className={styles.label}>
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.visibleCheckbox} />
      <span className={styles.text}>Короткометражки</span>
    </label>
  </div>
);

export default SearchForm;
