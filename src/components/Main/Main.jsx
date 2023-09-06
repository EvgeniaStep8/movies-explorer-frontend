import styles from "./Main.module.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

const Main = () => (
  <main className={styles.Main}>
    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe />
  </main>
);

export default Main;
