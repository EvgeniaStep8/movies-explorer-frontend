import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";
import Navigation from "../Navigation/Navigation";
import AccountLink from "../AccountLink/AccountLink";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isLandingHeader = location.pathname === "/";
  const isAuthHeader =
    location.pathname === "/signin" || location.pathname === "/signup";
  const isBaseHeader =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";
  const isVisibleHeader = isAuthHeader || isBaseHeader || isLandingHeader;

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
      className={cn({
        [styles.Header]: isBaseHeader || isLandingHeader,
        [styles.landingHeader]: isLandingHeader,
        [styles.authHeader]: isAuthHeader,
      })}
    >
      {isVisibleHeader && (
        <>
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
                    <button
                      className={styles.closeIcon}
                      onClick={onCloseIconClick}
                      type="button"
                      aria-label="кнопка закрыть"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Кнопка открытия бургерного меню"
                  className={cn(styles.burgerIcon, {
                    [styles.burgerIconHidden]: isBurgerOpen,
                  })}
                  onClick={onBurgerIconClick}
                />
              </>
            ))}
        </>
      )}
    </header>
  );
};

export default Header;
