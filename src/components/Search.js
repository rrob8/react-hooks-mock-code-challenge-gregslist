import React, {useState, useContext} from "react";
import { SearchProvider } from "../context/searchTerm";

function Search({searchTerm, onSearch}) {

  
    
 
  return (
    <form className="searchbar" >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => onSearch(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
