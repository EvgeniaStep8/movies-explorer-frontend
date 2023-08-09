import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Register.module.css";
import Button from "../../UI/Button/Button";

const Register = () => (
  <div className={styles.Register}>
    <h2 className={styles.title}>Добро пожаловать!</h2>
    <form>
      <label className={styles.label} htmlFor="register-name">
        Имя
      </label>
      <input
        className={cn(styles.input, { [styles.inputError]: false })}
        type="text"
        id="register-name"
      />
      <span className={styles.error}>error</span>
      <label className={styles.label} htmlFor="register-email">
        E-mail
      </label>
      <input
        className={cn(styles.input, { [styles.inputError]: false })}
        type="email"
        id="register-email"
      />
      <span className={styles.error}>error</span>
      <label className={styles.label} htmlFor="register-password">
        Пароль
      </label>
      <input
        className={cn(styles.input, { [styles.inputError]: false })}
        type="password"
        id="register-password"
      />
      <span className={styles.error}>error</span>
      <Button isSubmit text="Зарегистрироваться" />
    </form>
    <p className={styles.text}>
      Уже зарегистрированы?&nbsp;
      <Link to="/signin" className={styles.link}>
        Войти
      </Link>
    </p>
  </div>
);

export default Register;
