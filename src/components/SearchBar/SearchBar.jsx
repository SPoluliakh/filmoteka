export const SearchBar = ({ onSubmit, value, onChange, clearInput }) => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        onSubmit(value);
      }}
    >
      <input
        value={value}
        type="text"
        onChange={evt => onChange(evt.target.value)}
        placeholder="Enter movie`s name"
      />
      <button type="button" onClick={() => clearInput()}>
        Clear
      </button>
      <button type="submit">Search</button>
    </form>
  );
};
