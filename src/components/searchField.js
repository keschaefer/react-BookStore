import React from "react";

const SearchField = props => {
  return (
    <input
      type="text"
      onChange={e => props.onChangeSearch(e)}
      placeholder="Search.."
    />
  );
};
export default SearchField;
