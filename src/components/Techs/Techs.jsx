import styles from "./Techs.module.css";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import TechsIcon from "../../UI/TechsIcon/TechsIcon";

const Techs = () => (
  <section className={styles.Techs}>
    <SectionTitle title="Технологии" />
    <h3 className={styles.title}>7 технологий</h3>
    <p className={styles.subtitle}>
      На курсе веб-разработки мы освоили технологии, которые применили в
      дипломном проекте.
    </p>
    <ul className={styles.list}>
      <TechsIcon text="HTML" />
      <TechsIcon text="CSS" />
      <TechsIcon text="JS" />
      <TechsIcon text="React" />
      <TechsIcon text="Git" />
      <TechsIcon text="Express.js" />
      <TechsIcon text="mongoDB" />
    </ul>
  </section>
);

export default Techs;
