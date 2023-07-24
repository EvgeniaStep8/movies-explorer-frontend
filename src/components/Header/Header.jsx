import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";
import Navigation from "../Navigation/Navigation";
import AccountLink from "../Account/AccountLink";
import CloseIcon from "../../UI/icons/CloseIcon";
import BurgerIcon from "../../UI/icons/BurgerIcon";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const isLandingHeader = location.pathname === "/";
  const isAuthHeader =
    location.pathname === "/signin" || location.pathname === "/signup";

  const onLogoClick = () => {
    navigate("/");
  };

  const onSignInClick = () => {
    navigate("/signin");
  };

  const onBurgerIconClick = () => {
    setIsBurgerOpen(true);
  };

  const onCloseIconClick = () => {
    setIsBurgerOpen(false);
  };

  return (
    <header
      className={cn(styles.Header, {
        [styles.landingHeader]: isLandingHeader,
        [styles.authHeader]: isAuthHeader,
      })}
    >
      <Logo onClick={onLogoClick} />
      {!isAuthHeader &&
        (isLandingHeader ? (
          <div className={styles.buttons}>
            <Link to="/signup" className={styles.link}>
              Регистрация
            </Link>
            <Button text="Войти" onClick={onSignInClick} />
          </div>
        ) : (
          <>
            <div
              className={cn(styles.burger, {
                [styles.burgerOpen]: isBurgerOpen,
              })}
            >
              <div className={styles.container}>
                <Navigation />
                <AccountLink />
                <CloseIcon
                  className={styles.closeIcon}
                  onClick={onCloseIconClick}
                />
              </div>
            </div>
            <BurgerIcon
              className={cn(styles.burgerIcon, {
                [styles.burgerIconHidden]: isBurgerOpen,
              })}
              onClick={onBurgerIconClick}
            />
          </>
        ))}
    </header>
  );
};

export default Header;
