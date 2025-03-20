const SearchBox = ({ filter, onChange }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name=""
        onChange={(evt) => {
          onChange(evt.target.value);
        }}
        value={filter}
      />
    </>
  );
};

export default SearchBox;
