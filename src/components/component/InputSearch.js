import React from "react";

import '../styles/nav.css'

const SearchInput = ({onChange}) => {
  
  return (
    <div className="search-bar">
      
      <input
        className="search"
        placeholder= "Cerca:"
        onChange={onChange}

      />
      </div>
      
   
  );
};

export default SearchInput;