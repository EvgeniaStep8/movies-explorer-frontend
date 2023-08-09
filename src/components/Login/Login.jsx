import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Button from "../../UI/Button/Button";

const Login = () => (
  <div className={styles.Login}>
    <h2 className={styles.title}>Рады видеть!</h2>
    <form>
      <label className={styles.label} htmlFor="email">
        E-mail
      </label>
      <input className={styles.input} type="email" id="email" />
      <label className={styles.label} htmlFor="Login-password">
        Пароль
      </label>
      <input className={styles.input} type="password" id="Login-password" />
      <Button isSubmit text="Зарегистрироваться" />
    </form>
    <p className={styles.text}>
      Ещё не зарегистрированы?&nbsp;
      <Link to="/signup" className={styles.link}>
        Регистрация
      </Link>
    </p>
  </div>
);

export default Login;
