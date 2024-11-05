export function SearchBox({ search, handleSearchBox }) {
  return (
    <>
      <input
        className="SeachBox"
        type="text"
        placeholder="Search Movies"
        value={search}
        onChange={handleSearchBox}
      />
    </>
  );
}
