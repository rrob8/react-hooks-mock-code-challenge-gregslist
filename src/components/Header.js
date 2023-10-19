import React, {useState} from "react";
import Search from "./Search";

function Header({onSort, searchTerm, onSearch}) {

 
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
       
      </h1>
      <pre>  </pre>
      <button
      onClick={onSort}
      >Sort by Location</button>
      <Search searchTerm={searchTerm} onSearch={onSearch} />
    </header>
  );
}

export default Header;
