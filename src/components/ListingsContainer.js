import React, {useEffect, useState, useContext} from "react";
import ListingCard from "./ListingCard";
import { SearchContext } from "../context/searchTerm";

function ListingsContainer({sort, searchTerm}) {

const [listings, setListings] = useState([])



useEffect(()=>{
  fetch(`http://localhost:6001/listings`)
  .then(response=> response.json())
  .then(data=> setListings(data))

  
},[])

useEffect(()=>{
    
  if (sort ===true) {
  const sortedListing = [...listings].sort((a, b) => (a.location > b.location) ? 1 : -1)
  setListings(sortedListing)
}
else if (sort ===false){
  const unsortedListings = [...listings].sort((a,b)=> (a.id > b.id ) ? 1 : -1)
  setListings(unsortedListings)
}
},[sort])

useEffect(()=>{
  console.log('search is looking...')
  
    fetch(`http://localhost:6001/listings`)
    .then(response=> response.json())
    .then(data=> {
   
 const searchedItems = data.filter((item)=> item.description.startsWith(searchTerm))
 setListings(searchedItems)
 })

 if (searchTerm === '') {
  fetch(`http://localhost:6001/listings`)
  .then(response=> response.json())
  .then(data=> setListings(data))
 }
},[searchTerm])

console.log(listings)

function handleDelete (deletedListing) {
  
  fetch(`http://localhost:6001/listings/${deletedListing.id}`,{
    method:"DELETE",
    })
   .then((r) => r.json())
   .then(() => console.log("deleted!"));
  

  const updatedListings = listings.filter((listing) => listing !== deletedListing)
  setListings(updatedListings)
}

  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>{
        return < ListingCard key={listing.id} listing={listing} onDelete={handleDelete} />})}
      </ul>
    </main>
  );
}

export default ListingsContainer;
