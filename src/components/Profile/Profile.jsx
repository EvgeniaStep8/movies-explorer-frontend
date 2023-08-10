import { useState } from "react";
import cn from "classnames";
import styles from "./Profile.module.css";

const Profile = ({ name, email }) => {
  const [isEditMode, setEditMode] = useState(false);

  const onEditButtonClick = () => {
    setEditMode((state) => !state);
  };

  return (
    <div className={styles.Profile}>
      <h2 className={styles.title}>{`Привет, ${name}!`}</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.text}>Имя</span>
          <input value={name} readOnly={!isEditMode} className={styles.input} />
        </label>
        <label className={styles.label}>
          <span className={styles.text}>E-mail</span>
          <input
            value={email}
            readOnly={!isEditMode}
            className={styles.input}
          />
        </label>
      </form>
      <button
        className={cn(styles.button, styles.edit)}
        type="button"
        onClick={onEditButtonClick}
      >
        {isEditMode ? "Сохранить" : "Редактировать"}
      </button>
      <button className={cn(styles.button, styles.logout)} type="button">
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default Profile;
