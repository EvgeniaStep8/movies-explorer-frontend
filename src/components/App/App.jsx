import styles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () => (
  <div className={styles.App}>
    <Header />
    <Main />
    <Footer visible />
  </div>
);

export default App;
