import styles from "./Main.module.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

const Main = () => (
  <main className={styles.Main}>
    <Promo />
    <AboutProject />
    <Techs />
  </main>
);

export default Main;
