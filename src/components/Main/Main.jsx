import styles from "./Main.module.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";

const Main = () => (
  <main className={styles.Main}>
    <Promo />
    <AboutProject />
  </main>
);

export default Main;
