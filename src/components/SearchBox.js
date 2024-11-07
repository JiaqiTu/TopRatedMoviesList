import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBox, setCurrentPage } from "../redux/movieSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const SearchBox = useSelector((state) => state.movies.SearchBox);
  const handleSearch = (e) => {
    dispatch(setSearchBox(e.target.value));
    dispatch(setCurrentPage(1));
  };
  return (
    <>
      <input
        className="SeachBox"
        type="text"
        placeholder="Search Movies"
        value={SearchBox}
        onChange={handleSearch}
      />
    </>
  );
}

export default SearchBox;
