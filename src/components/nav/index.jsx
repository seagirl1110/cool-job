import styles from './styles.module.css';
import logo from './../../assets/icons/logo.svg';

function Nav() {
  return (
    <div className={styles.nav_container}>
      <img src={logo} alt="cooljob_logo" />
      <div className={styles.nav_menu}>
        <div>
          <a href="#">Поиск работы</a>
          <a href="#">Поиск стартапов</a>
        </div>
        <div>
          <a href="#">Регистрация</a>
          <button className={styles.login_btn}>Вход</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
