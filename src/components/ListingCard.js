import React from "react";

function ListingCard({listing, onDelete}) {


 

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image !== '' ? listing.image : "https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
        onClick={()=> onDelete(listing)}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
