import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => (
  <div className={styles.App}>
    <Header />
    <Footer visible />
  </div>
);

export default App;
