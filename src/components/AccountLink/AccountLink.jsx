import { Link } from "react-router-dom";
import styles from "./AccountLink.module.css";
import accountIcon from "../../images/account-icon.svg";

const Account = () => (
  <Link to="/profile" className={styles.AccountLink}>
    <p className={styles.text}>Аккаунт</p>
    <div className={styles.container}>
      <img src={accountIcon} alt="Иконка аккаунта" />
    </div>
  </Link>
);

export default Account;
