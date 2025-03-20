const SearchBox = ({ filter, onFilter }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name=""
        onChange={(evt) => {
          onFilter(evt.target.value);
        }}
        value={filter}
      />
    </>
  );
};

export default SearchBox;
