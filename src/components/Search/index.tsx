import SearchIcon from "../UI/Icons/Search";
import s from "./styles.module.scss";
const Search = () => {
  return (
    <div>
      <form className={s.search__form}>
        <input
          type="text"
          className={s.search__input}
          placeholder="Поиск бренда, товара, категории..."
        />
        <button>
          <SearchIcon className={s.search__icon} />
        </button>
      </form>
    </div>
  );
};

export default Search;
