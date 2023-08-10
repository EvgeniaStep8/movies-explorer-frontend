import styles from "./Preloader.module.css";

const Preloader = () => (
  <div className={styles.preloader}>
    <div className={styles.container}>
      <span className={styles.round} />
    </div>
  </div>
);

export default Preloader;
