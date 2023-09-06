import styles from "./Portfolio.module.css";
import PortfolioLink from "../../UI/PortfolioLink/PortfolioLink";

const Portfolio = () => (
  <>
    <h4 className={styles.title}>Портфолио</h4>
    <div className={styles.links}>
      <PortfolioLink
        text="Статичный сайт"
        link="https://github.com/EvgeniaStep8/how-to-learn"
      />
      <PortfolioLink
        text="Адаптивный сайт"
        link="https://github.com/EvgeniaStep8/russian-travel"
      />
      <PortfolioLink
        text="Одностраничное приложение"
        link="https://github.com/EvgeniaStep8/react-mesto-api-full-gha"
      />
    </div>
  </>
);

export default Portfolio;
