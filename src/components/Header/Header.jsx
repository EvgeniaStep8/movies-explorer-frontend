import { useNavigate, useLocation, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLanding = location.pathname === "/";

  const onLogoClick = () => {
    navigate("/");
  };

  const onSignInClick = () => {
    navigate("/signin");
  };

  return (
    <header
      className={cn(styles.Header, { [styles.landingHeader]: isLanding })}
    >
      <Logo onClick={onLogoClick} />
      {isLanding ? (
        <div className={styles.buttons}>
          <Link to="/signup" className={styles.link}>
            Регистрация
          </Link>
          <Button text="Войти" onClick={onSignInClick} />
        </div>
      ) : (
        <div className={styles.container}>
          <Navigation />
          <Account />
        </div>
      )}
    </header>
  );
};

export default Header;
