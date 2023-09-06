import styles from "./Promo.module.css";
import landingLogo from "../../images/landing-logo.svg";

const Promo = () => (
  <section className={styles.Promo}>
    <h1 className={styles.title}>
      Учебный проект студента факультета Веб&#8209;разработки.
    </h1>
    <img src={landingLogo} alt="Логотип лэндинга" className={styles.logo} />
  </section>
);

export default Promo;
