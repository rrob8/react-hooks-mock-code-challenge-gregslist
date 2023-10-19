import React,{useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {

  const [sort, setSort] = useState(false)
  const [searchTerm, setSearchTerm ] = useState('')


  function sortListings () {
    setSort(!sort)
   

  }

  function handleSearch (e) {
    e.preventDefault();
    setSearchTerm(e.target.value)
  }

  
 

  return (
    <div className="app">
        
      <Header onSearch={handleSearch} searchTerm={searchTerm} onSort={sortListings}/>
    
      <ListingsContainer searchTerm={searchTerm} sort={sort}/>
      
    </div>
  );
}

export default App;
