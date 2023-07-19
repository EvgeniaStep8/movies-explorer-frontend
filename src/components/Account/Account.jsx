import { Link } from "react-router-dom";
import styles from "./Account.module.css";
import AccountIcon from "../../UI/icons/AccountIcon";

const Account = () => (
  <div className={styles.Account}>
    <Link to="/profile" className={styles.link}>
      Аккаунт
    </Link>
    <div className={styles.container}>
      <AccountIcon />
    </div>
  </div>
);

export default Account;
