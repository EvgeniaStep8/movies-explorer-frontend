import styles from "./AboutMe.module.css";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import avatar from "../../images/student.jpg";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => (
  <section className={styles.AboutMe}>
    <SectionTitle title="Студент" />
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.title}>Евгения</h3>
        <p className={styles.subtitle}>Фронтенд-разработчик, 26 лет</p>
        <p className={styles.text}>
          Разработка веб-приложений - это то, что меня по-настоящему увлекает и
          приносит удовольствие. Я заинтересовалась веб-разработкой после
          прохождения курсов повышения квалификации и создания небольшого
          веб-приложения для студентов. Этот опыт показал мне, насколько
          увлекательна и перспективна веб-разработка, и я решила изменить свою
          жизнь в этом направлении.
        </p>
        <a
          href="https://github.com/EvgeniaStep8"
          target="blank"
          className={styles.link}
        >
          Github
        </a>
      </div>
      <img src={avatar} alt="аватар" className={styles.avatar} />
    </div>
    <Portfolio />
  </section>
);

export default AboutMe;
