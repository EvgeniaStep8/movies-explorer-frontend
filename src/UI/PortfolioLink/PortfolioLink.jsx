import styles from "./PortfolioLink.module.css";

const PortfolioLink = ({ text, link }) => (
  <a className={styles.PortfolioLink} href={link} target="blank">
    <p className={styles.text}>{text}</p>
    <p className={styles.text}>↗</p>
  </a>
);

export default PortfolioLink;
