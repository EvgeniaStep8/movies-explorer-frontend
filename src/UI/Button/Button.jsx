import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({ isSubmit = false, text, onClick }) => (
  <button
    type={isSubmit ? "submit" : "button"}
    className={cn(styles.Button, { [styles.submitButton]: isSubmit })}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
