import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Footer from "../Footer/Footer";

const App = () => (
  <div className={styles.App}>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<Movies savedMovies />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route
        path="/profile"
        element={<Profile name="Василий" email="pochta@yandex.ru" />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
