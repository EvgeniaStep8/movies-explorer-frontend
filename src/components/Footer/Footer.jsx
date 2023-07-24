import styles from "./Footer.module.css";

const Footer = ({ visible }) =>
  visible && (
    <footer className={styles.Footer}>
      <h2 className={styles.title}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className={styles.container}>
        <p className={styles.copyright}>&#169; 2023</p>
        <nav className={styles.links}>
          <a
            href="https://practicum.yandex.ru/"
            target="blank"
            className={styles.link}
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/EvgeniaStep8/"
            target="blank"
            className={styles.link}
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );

export default Footer;
