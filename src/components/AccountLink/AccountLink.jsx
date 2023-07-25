import { Link } from "react-router-dom";
import styles from "./AccountLink.module.css";
import AccountIcon from "../../UI/icons/AccountIcon";

const Account = () => (
  <Link to="/profile" className={styles.AccountLink}>
    <p className={styles.text}>Аккаунт</p>
    <div className={styles.container}>
      <AccountIcon />
    </div>
  </Link>
);

export default Account;
