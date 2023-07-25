import cn from "classnames";
import styles from "./AboutProject.module.css";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";

const AboutProject = () => (
  <section className={styles.AboutProject}>
    <SectionTitle title="О проекте" />
    <ul className={styles.list}>
      <li className={styles.column}>
        <h3 className={styles.title}>Дипломный проект включал 5 этапов</h3>
        <p className={styles.subtitle}>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </li>
      <li className={styles.column}>
        <h3 className={styles.title}>На выполнение диплома ушло 5 недель</h3>
        <p className={styles.subtitle}>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </li>
    </ul>
    <div className={styles.progress}>
      <div className={styles.part}>
        <div className={cn(styles.container, styles.backend)}>1 неделя</div>
        <p className={styles.text}>Back-end</p>
      </div>
      <div className={styles.part}>
        <div className={cn(styles.container, styles.frontend)}>5 недель</div>
        <p className={styles.text}>Front-end</p>
      </div>
    </div>
  </section>
);

export default AboutProject;
