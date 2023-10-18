import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

const [listings, setListings] = useState([])

useEffect(()=>{
  fetch(`http://localhost:6001/listings`)
  .then(response=> response.json())
  .then(data=> setListings(data))

  
},[])
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
