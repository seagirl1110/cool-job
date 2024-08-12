import styles from './styles.module.css';

function Search() {
  return (
    <div className={styles.search_container}>
      <h1>
        Один клик <br />и работа в кармане
      </h1>
      <form action="" className={styles.search_form}>
        <input
          className={styles.search_company}
          type="text"
          name="company"
          placeholder="Должность или компания"
        />
        <div></div>
        <input
          className={styles.search_city}
          type="text"
          name="city"
          placeholder="Город, Страна"
        />
        <input type="submit" value="Поиск" />
      </form>
    </div>
  );
}

export default Search;
