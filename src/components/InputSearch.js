import React from "react";


const SearchInput = ({onChange}) => {
  
  return (
    <div>
      <input
        className="search"
        placeholder= "esempio: Burger King"
        onChange={onChange}

      />
    </div>
  );
};

export default SearchInput;