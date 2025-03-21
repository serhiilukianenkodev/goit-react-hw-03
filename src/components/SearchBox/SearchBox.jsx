import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <h2>Find contacts by name</h2>
      <input
        className={css.searchInput}
        type="text"
        name=""
        onChange={(evt) => {
          onFilter(evt.target.value);
        }}
        value={filter}
      />
    </div>
  );
};

export default SearchBox;
