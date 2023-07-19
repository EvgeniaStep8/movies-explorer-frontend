import styles from "./Logo.module.css";

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className={styles.Logo}>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M19 38c10.493 0 19-8.507 19-19S29.493 0 19 0 0 8.507 0 19s8.507 19 19 19Zm0-9.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Logo;
