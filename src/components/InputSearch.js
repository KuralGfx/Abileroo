import React from "react";


const SearchInput = ({onChange}) => {
  
  return (
    <div>
      <input
        className="search"
        placeholder= "Cerca:"
        onChange={onChange}

      />
    </div>
  );
};

export default SearchInput;