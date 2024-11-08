import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBox } from "../store/movieSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const searchBox = useSelector((state) => state.search.searchBox);

  const handleSearch = (e) => {
    dispatch(setSearchBox(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={searchBox}
      onChange={handleSearch}
      className="search-box"
    />
  );
};
