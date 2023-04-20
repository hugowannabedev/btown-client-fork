import React from "react";

function SpotCard(props) {
    const { name, description, location, imageUrl, addToCollection } = props

    function fuctionAddToCollection() {
        addToCollection(name);
    }

    return (
        <div className="SpotCard">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{location}</p>
            <button onClick={fuctionAddToCollection}>Add to Collection</button>
        </div>
    )
}
export default SpotCard;