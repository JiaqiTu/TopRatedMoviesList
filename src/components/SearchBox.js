import { useState } from "react";

export const SearchBox = (props) => {
  const [searchBar, setSearchBar] = useState("");

  const handleSearch = (e) => {
    setSearchBar(e.target.value);
  };
  return (
    <>
      <input
        className="SeachBox"
        type="text"
        placeholder="Search Movies"
        value={searchBar}
        onChange={handleSearch}
      />
    </>
  );
};
